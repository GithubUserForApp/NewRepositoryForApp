const express = require("express");
//var http = require("http");
const app = express();
//const port= 4000;
const port=process.env.PORT||4000;

const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://RiyaApp:riyanewapp1234@cluster0.inlryuf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once("open",function(){
    console.log("Connected MongoDB");
});

app.listen(port,function(){
    console.log("Server is running on port", port);
});

app.get('/', (req,res)=>{
    res.send("Hello"); 
});

app.use(express.json());

const UserIssueRoute = require("./routes/issues");
app.use("/userIssue", UserIssueRoute);

