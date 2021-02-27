const router = require("express").Router();
const controller  = require("../controllers/controller.js");

router.get('/getUsers', controller.getUsers);
router.post('/newUser', controller.newUser);
//router.put('/updateUser', controller.updateUser);
router.delete('/deleteUser', controller.deleteUser);


module.exports = router;