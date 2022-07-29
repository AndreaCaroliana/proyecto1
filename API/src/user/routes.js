const { Router } = require('express');
const controller = require ("./controller");

const router = Router();

router.get('/', controller.getUser);
router.post("/register", controller.addUser);
router.get("/login/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.removeUser);


module.exports = router;