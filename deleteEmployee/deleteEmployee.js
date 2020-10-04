let mongodb = require("mongodb");
let sambaIT =  mongodb.MongoClient;
// let url = process.env.MONGO_URI || "mongodb://localhost:27017/miniprojectdb";
let url = "mongodb+srv://admin:admin@cluster0.sxtft.mongodb.net/micropyramid?retryWrites=true&w=majority" || "mongodb://localhost:27017/miniprojectdb";
let deleteEmployee = require("express").Router().delete("/",(req,res)=>{
    sambaIT.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db("micropyramid");
            db.collection("employeedetails").deleteOne({"empId":req.body.empId},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });

});
module.exports = deleteEmployee;
