
const router = require("express").Router();


const UserController = require("../controller/UserController");
router.get("/getapi",UserController.getapi);


module.exports = router;