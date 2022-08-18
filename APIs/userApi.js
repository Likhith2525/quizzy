//create mini express app
const exp = require('express')
const userApi = exp.Router();
const jwt=require("jsonwebtoken")

const expressErrorHandler = require("express-async-handler")
const bcryptjs=require("bcryptjs")
//body parsing middlleware
userApi.use(exp.json())






//http://localhost:3000/user/getusers
//get users
userApi.get("/getusers", expressErrorHandler(async (req, res) => {
   
    let userCollectionObj = req.app.get("userCollectionObj")
    let userList = await userCollectionObj.find().toArray()
    res.send({ message: userList })

}))


//get user by username
userApi.get("/getuser/:username", expressErrorHandler(async (req, res, next) => {
      
    let userCollectionObj = req.app.get("userCollectionObj")
    //get username from url
    let un = req.params.username;
    //search
    let userObj = await userCollectionObj.findOne({ username: un })

    if (userObj === null) {
        res.send({ message: "User not existed" })
    }
    else {
        res.send({ message: userObj })
    }
}))

//http://localhost:3000/user/createuser
//create user
userApi.post("/createuser",expressErrorHandler(async (req, res, next) => {

    let userCollectionObj = req.app.get("userCollectionObj")
    //get userobj
   //console.log(req.body)
    let newUser = req.body;
    //console.log(newUser)
    //search for existing user
    let user = await userCollectionObj.findOne({username:newUser.username})
    //if user existed
    //console.log(user)
    if (user!=null) {
        res.send({ message: "user already existed"})
    }
   
 
    else{
         //hash password
        let hashedPassword = await bcryptjs.hash(newUser.password, 7)

        //replace password
         newUser.password = hashedPassword;
   
       
        
        //insert
        await userCollectionObj.insertOne(newUser)
        res.send({message:"User created"})
    }
  
}))

//user login
userApi.post('/login', expressErrorHandler(async (req, res) => {
    let userCollectionObj = req.app.get("userCollectionObj")

    //get user credetials
    let credentials = req.body;
    //search user by username
    let user = await userCollectionObj.findOne({ username: credentials.username })
    //if user not found
    if (user === null) {
        res.send({ message: "invalid username" })
    }
    else {
        //compare the password
        let result = await bcryptjs.compare(credentials.password, user.password)
        //if not matched
        if (result === false) {
            res.send({ message: "Invalid password" })
        }
        else {
            //create a token
            let signedToken = jwt.sign({ username: credentials.username },'feefrefrf',{ expiresIn: 10 })
            //send token to client
            res.send({ message: "Logged in successfully", token: signedToken, username: credentials.username, userObj: user })
        }

    }

}))












//export
module.exports = userApi;