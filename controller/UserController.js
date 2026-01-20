const UserModel = require("../model/UserModel");




const getapi = async(req,res)=>{
    console.log("Hello World");
    const user = await UserModel.find();
    res.json({
        message:"Hello World",
        data:user
    });
}




module.exports = {
    getapi
}