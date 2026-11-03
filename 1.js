const express = require("express");
const {connection} = require("./config/db")
const {userRouter} = require("./routes/user.route")

const app = express();

app.use("/user",userRouter)

app.get("/home", (req, res) => {
    res.send({msg: "welcome to notes application"})
})

app.listen(8080, async() => {
    try{
        await connection;
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
    console.log("Server Started");
});