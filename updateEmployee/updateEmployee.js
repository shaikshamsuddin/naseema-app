let mongodb = require("mongodb");
let sambaIT = mongodb.MongoClient;

let url = "mongodb+srv://admin:admin@cluster0.sxtft.mongodb.net/micropyramid?retryWrites=true&w=majority" || "mongodb://localhost:27017/micropyramid";
let updateEmployee = require("express").Router().put("/",(req,res)=>{
    let basedOnProperty = {"empId":req.body.empId}; 
    let newProperties = {$set:{"Name":req.body.Name,
                                "Age":req.body.Age,
                                "Salary":req.body.Salary,
                                "Department":req.body.Department,
                                "DOB":req.body.DOB,
                                "Gender":req.body.Gender,
                                "languages":req.body.languages}};
    sambaIT.connect(url,(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db("micropyramid");
            db.collection("employeedetails").updateOne(basedOnProperty,newProperties,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({update : "success"});
                }
            });
        }
    });



});
module.exports = updateEmployee;