const express=require('express');
const Router=express.Router();
const Student=require('../model/Student');


// adding studetn
Router.post("/add", async (req,res)=>{
    const {firstName,middleName,lastName,selectClass,selectDivision,rollNo,addressLine1,addressLine2,landmark,city,pincode}=req.body
    const newStudent=await new Student({
        firstName,middleName,lastName,selectClass,selectDivision,rollNo,addressLine1,addressLine2,landmark,city,pincode
    })
    // now save
    await newStudent.save() ;
    res.json(newStudent)

})

// get all student
Router.get("/get", async (req,res)=>{
    const students=await Student.find();
    res.json(students)
})

// get a student
Router.get("/:id", async (req,res)=>{
    const students=await Student.findById(req.params.id);
    res.json(students)
})

// updating student

Router.put("/:id",async (req,res)=>{
    const student_id=req.params.id;
    const student_to_update=await Student.findById(student_id);
    if(!student_to_update){
        return res.status(401).send("Invalid credential");
    }
    const {firstName,middleName,lastName,selectClass,selectDivision,rollNo,addressLine1,addressLine2,landmark,city,pincode}=req.body
    if(firstName){
        student_to_update.firstName=firstName;
        
    }
    if(middleName){
        student_to_update.middleName=middleName;
        
    }
    if(lastName){
        student_to_update.lastName=lastName;
        
    }
    if(selectClass){
        student_to_update.selectClass=selectClass;
        
    }
    if(selectDivision){
        student_to_update.selectDivision=selectDivision;
        
    }
    if(addressLine1){
        student_to_update.addressLine1=addressLine1;
        
    }
    if(addressLine2){
        student_to_update.addressLine2=addressLine2;
        
    }if(city){
        student_to_update.city=city;
        
    }
    if(pincode){
        student_to_update.pincode=pincode;
        
    }
    if(landmark){
        student_to_update.landmark=landmark;
        
    }


    const updated_student=await Student.findByIdAndUpdate(req.params.id,student_to_update,{new:true});
    res.status(200).send(updated_student);


})


// delete a student
Router.delete('/:id',
async(req,res)=>{
    try{
        // first we have to check the user requesting is valid user
        
        const student_to_delete=await Student.findById(req.params.id);
        if(!student_to_delete){
            return res.status(400).send("Invalid credential");
        }
        const delete_note=await Student.findByIdAndDelete(req.params.id);
        res.status(200).send("successfully deleted");
    }
    catch(err){
        console.log(err);
        res.send(("Server Error"));
    }

});




module.exports=Router

