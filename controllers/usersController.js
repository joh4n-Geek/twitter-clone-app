const users = require("../mock-data/users.json");

// La lógica de las acciones de cada ruta se define dentro de los controladores
const userList = (request, response) => {
    response.json(users);
};

const user = (request, response) => {
    response.json(users[0]);
};

// Exportar un objeto con todas las funciones creadas
module.exports = {
    userList,
    user
};