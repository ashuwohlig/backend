const express=require("express");
const router=express.Router();
const userProblem=require("../controller/AddProblem")
router.post("/add",userProblem.AddIssue);
module.exports=router;