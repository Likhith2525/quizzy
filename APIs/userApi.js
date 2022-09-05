//create mini express app
const exp = require('express')
const userApi = exp.Router();
const jwt=require("jsonwebtoken")
const expressErrorHandler = require("express-async-handler")
const bcryptjs=require("bcryptjs")
//body parsing middlleware
userApi.use(exp.json())




userApi.post('/evaluateuser', expressErrorHandler(async (req, res, next) => {

     let userObj=req.body
     //console.log(userObj)
    let marksCollectionObj = req.app.get("marksCollectionObj")
   // let qobj = await marksCollectionObj.findOne({ username: userObj.username });
    let userCartObj = await marksCollectionObj.findOne({username:userObj.username})

    //console.log(userCartObj)
    
    //if userCartObj is not existed
    if (userCartObj === undefined) {

        //create new object
        dict={}
        dict[userObj.subjectname]=userObj.points;
        let newUserCartObject = { username:userObj.username, dict }
        //console.log(newUserCartObject)
        //insert it
        await marksCollectionObj.insertOne(newUserCartObject)

        let latestCartObj = await marksCollectionObj.findOne({ username:userObj.username })
        res.send({ message: "Exam completed Successfully", latestCartObj: latestCartObj })

    }
    //if existed
    else {
       // let index = userCartObj.scores.findIndex(subjectname => rank === 7);
        //push productObject to products array
       // userCartObj.scores.push(dict)
        //update document
        userCartObj.dict[userObj.subjectname]=userObj.points
        //console.log(userCartObj)
        await marksCollectionObj.updateOne({ username: userObj.username }, { $set: { ...userCartObj } })
        let latestCartObj = await marksCollectionObj.findOne({ username: userObj.username })
        res.send({ message: "Exam completed Successfully", latestCartObj: latestCartObj })
    }

    
  
}))

//adding new product

userApi.post('/add-product', expressErrorHandler(async (req, res, next) => {


    let productCollectionObject = req.app.get("questionCollectionObj")

    newquestion = req.body;
    //console.log(newProduct)
    //search
    let qobj = await productCollectionObject.findOne({ qno: newquestion.qno });

    if(qobj === undefined){
       let qstionsObj= await productCollectionObject.insertOne(newquestion)
       res.send({message:"new question added"})
    }
    else{
          res.send({message:"question already existed with this id"})
    }
  
}))


//to read all products
userApi.get("/getproducts", expressErrorHandler(async (req, res, next) => {

    let productCollectionObject = req.app.get("productCollectionObject")

    let products = await productCollectionObject.find().toArray()

    res.send({ message: products })

}))




//http://localhost:3000/user/getusers
//get users
userApi.get("/getusers", expressErrorHandler(async (req, res) => {
   
    let userCollectionObj = req.app.get("userCollectionObj")
    let userList = await userCollectionObj.find().toArray()
    res.send({ message: userList })

}))

userApi.get("/get-all-scores", expressErrorHandler(async (req, res) => {
   
    let marksCollectionObj = req.app.get("marksCollectionObj")
    let scoresList = await marksCollectionObj.find().toArray()
    res.send({ message: scoresList })

}))

userApi.get("/getsubjects", expressErrorHandler(async (req, res) => {
    let productCollectionObject = req.app.get("questionCollectionObj")
    let userList = await productCollectionObject.distinct("subname")

    //console.log(userList)
    res.send({ message: userList })

}))
//get questions by subname
userApi.get("/getquestions/:sub", expressErrorHandler(async (req, res, next) => {
      
    let productCollectionObject = req.app.get("questionCollectionObj")
    //get username from url
    let un = req.params.sub;
    //console.log(un)
    //search
    let userObj= await productCollectionObject.find({subname:un}).toArray();                                                                                                                                                                                                                                       
    //console.log(userObj)
    if (userObj === null) {
        res.send({ message: "question not existed" })
    }
    else {
        res.send({ message: userObj })
    }
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

//get scores by name
userApi.get("/getscore/:name", expressErrorHandler(async (req, res, next) => {
      
    let productCollectionObject = req.app.get("marksCollectionObj")
    //get username from url
    let un = req.params.name;
    //console.log(un)
    //search
    let userObj= await productCollectionObject.findOne({username:un});                                                                                                                                                                                                                                       
    //console.log(userObj)
    if (userObj === null) {
        res.send({ message: "question not existed" })
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






















module.exports = userApi;