const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/backend");
const db=mongoose.connection;
db.on("error",console.error.bind(console,"error to connecting db"));
db.once("open",function()
{
    console.log("connection to database:: MongoDB");
})

module.exports=db;