const router = require("express").Router();
const controller  = require("../controllers/controller.js");

router.get('/getUsers', controller.getUsers);
router.post('/newUser', controller.newUser);
router.put('/updateUser/:id', controller.updateUser);
router.delete('/deleteUser/:id', controller.deleteUser);


module.exports = router;