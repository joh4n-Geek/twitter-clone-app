const express = require("express");
const app = express();
const port = 3000;
// const { userList } = require("../controllers/userController");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

/* app.get("/", (req, res) => {
    res.send("Hola");
}); */

app.use("/api/v1", userRouter);
app.use("/api/v1", authRouter);

app.listen(port, () => {
    console.log(`La app esta escuchando en <http://localhost>:${port}`);
});