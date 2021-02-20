const express=require("express");
const router=express.Router();
router.use("/userIssue",require("./userIssue"));

module.exports=router;