const mongoose=require("mongoose");
const userIssueSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    LastName:  {
        type: String,
        required: false
    },
    EmailId:  {
        type: String,
        required: true
    } ,
    Department:{
        type: String,
        enum:["Commerce","Economics","English","Hindi","Mathematics","Philosophy","Political Science",
        "Punjabi","Statistics","Computer Science","Elementary Education","Environmental Science",
        "History","Music","Physical Education and Sports Sciences","Psychology","Sanskrit","Urdu"],
        required: true
    },
    OppurtunityType:{
        type: String,
        enum:["Internship","Internship with PPO","Placement"],
        required:true
    },
    Role:{
        type: String,
        enum:["Alumni","Admin","Student"],
        required: true
    },
    EligiblityCriteria: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model("UserIssue", userIssueSchema); 