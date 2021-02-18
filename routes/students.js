
var express = require('express');
var router = express.Router();
let students = [];
 
router.get("/students",(req,res)=>{
   res.json(students)
})

router.put("/student/:id/add-mentor",(req,res)=>{
    if(students[req.params.id - 1]){
        students[req.params.id-1].mentor = req.body.mentorName;

        res.json({
            message:"Record has been updated"
        })
    }else{
        res.json({
            message:"Record does not exist"
        })
    }
 })
 
router.post("/student",(req,res)=>{
   let studentData = {
       name:req.body.name,
       id:students.length + 1
   }
   students.push(studentData)
   res.json({
       message: "Entry has been added"
   })
})
 
router.get("/student/:id",(req,res)=>{
   if(students[req.params.id - 1]){
       res.json(students[req.params.id - 1])
   }else{
       res.json({
           message:"Record does not exist"
       })
   }
})
 
router.put("/student/:id",(req,res)=>{
   if(students[req.params.id - 1]){
       students[req.params.id-1].name = req.body.name;
       res.json({
           message:"Record has been updated"
       })
   }else{
       res.json({
           message:"Record does not exist"
       })
   }
})
 
router.delete("/student/:id",(req,res)=>{
   let studentData = students.find(student=> student.id == req.params.id);
   let index = students.indexOf(studentData)
   //console.log(index);
   students.splice(index,1)
   res.json({
       message: "Record has been deleted"
   })
})

module.exports = router;
