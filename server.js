//create express application
const exp=require("express")
const app=exp();
const path=require("path")


require("dotenv").config()
//connect angular app with express server
app.use(exp.static(path.join(__dirname,'./dist/learningapp/')))
//import mongoclient
const mc=require("mongodb").MongoClient;

//connection string
//const databaseurl="mongodb+srv://vnr2023:vnr2023@mymongo1.v5zxf.mongodb.net/mprojectdb?retryWrites=true&w=majority"
const databaseurl=process.env.DATABASE_URL;
//connect to db
mc.connect(databaseurl,{useNewUrlParser:true, useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in database connection",err)
    }
    else{
        //get database object from client object
        let databaseObj=client.db("mprojectdb")
        //create user collection object
        let userCollectionObj=databaseObj.collection("usercollection")
        let questionCollectionObj=databaseObj.collection("questioncollection")
        let marksCollectionObj=databaseObj.collection("markscollection")
        app.set("userCollectionObj", userCollectionObj)
        app.set("marksCollectionObj", marksCollectionObj)
        app.set("questionCollectionObj", questionCollectionObj)

      
    }
})




//import APIs
const userapi=require("./APIs/userapi")

//execure specific api based on path
app.use('/user',userapi)

app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'dist/learningapp/index.html'), function(err){
        if(err){
            res.status(500).send(err)
        }
    })
})

//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:`error is ${err.message}`})
})


//invalid path
app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is invalid`})
})



//assign port
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`server is listening on port ${port}`))