var express = require('express');
var router = express.Router();
let mentors = [];

router.get("/mentors",(req,res)=>{
    res.json(mentors)
 })

 router.put("/mentor/:id",(req,res)=>{
    if(mentors[req.params.id - 1]){
        mentors[req.params.id-1].students.push(req.body.studentName);
        res.json({
            message:"Record has been updated"
        })
    }else{
        res.json({
            message:"Record does not exist"
        })
    }
 })
  
 router.post("/mentor",(req,res)=>{
    let mentorData = {
        name:req.body.name,
        id:mentors.length + 1
    }
    mentors.push(mentorData)
    res.json({
        message: "Entry has been added"
    })
 })
  
 router.get("/mentor/:id",(req,res)=>{
    if(mentors[req.params.id - 1]){
        res.json(mentors[req.params.id - 1])
    }else{
        res.json({
            message:"Record does not exist"
        })
    }
 })
  
 router.put("/mentor/:id",(req,res)=>{
    if(mentors[req.params.id - 1]){
        mentors[req.params.id-1].name = req.body.name;
        res.json({
            message:"Record has been updated"
        })
    }else{
        res.json({
            message:"Record does not exist"
        })
    }
 })
  
 router.delete("/mentor/:id",(req,res)=>{
    let mentorData = mentors.find(mentor=> mentor.id == req.params.id);
    let index = mentors.indexOf(mentorData)
    //console.log(index);
    mentors.splice(index,1)
    res.json({
        message: "Record has been deleted"
    })
 })
 
 module.exports = router;