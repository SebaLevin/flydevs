const router = require("express").Router();
const controller = require("../controllers/controller.js");

router.get('/', controller.getUsers);


module.exports = router;