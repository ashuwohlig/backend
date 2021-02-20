const Issue=require("../models/Addproblem");

module.exports.AddIssue=(req,res)=>{
    if(!req.body.issue)
    {
        return res.status(400).send({
            message:"Content can not be empty"
        });
    }

    const add=new Issue({
        issue:req.body.issue,
    })
    add.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.status(500).send({
            message:err.message || "some error occured"
        })
    })
}