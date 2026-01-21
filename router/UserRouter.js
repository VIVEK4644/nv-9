
const router = require("express").Router();


const UserController = require("../controller/UserController");
router.get("/getapi",UserController.getapi);
// router.post("/adduser",UserController.addUser);

module.exports = router;