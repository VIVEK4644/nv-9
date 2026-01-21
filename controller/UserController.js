const Usermodel = require("../model/UserModel");


const getapi = async (req, res) => {
  try {
    console.log("Hello World");
    const user = await Usermodel.find();

    res.status(200).json({
      message: "Hello World",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
};

// const addUser = async (req, res) => {

//     console.log("User added",req.body);
//   try {
//     console.log("User added",req.body);
//     const user = await Usermodel.create(req.body);

//     res.status(201).json({
//       message: "User added successfully",
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error adding user",
//       error: error.message
//     });
//   }
// };





module.exports = {
    getapi,
     
}
