const express = require("express");
const router = express.Router();
const { user, userList } = require("../controllers/usersController");

// La responsabilidad del Router solamente es definir las rutas (principios SOLID)
// Dentro de las rutas no es buena práctica definir la lógica del endpoint
router.get("/users", userList);
router.get("/user/:id", user);

module.exports = router;

// module.exports = {
//     router,
// };