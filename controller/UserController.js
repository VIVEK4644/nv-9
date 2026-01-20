const UserModel = require("../model/UserModel");




const getapi = async(req,res)=>{
    console.log("Hello World");
    const user = await UserModel.find();
    res.json({
        message:"Hello World",
        data:user
    });
}

const addUser = async (req, res) => {

    console.log("User added",req.body);
  try {
    console.log("User added",req.body);
    const user = await UserModel.create(req.body);

    res.status(201).json({
      message: "User added successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding user",
      error: error.message
    });
  }
};





module.exports = {
    getapi,
    addUser 
}
