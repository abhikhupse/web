const express = require('express');
const app = express();
const path = require("path");
const port = 8000;

// console.log(path.join(__dirname,"..D:/Project1/html"));


const taticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates");

app.get("" , (req, res) => {
    res.render("index" , {
        name : "Abhi"
    })
});

app.get("/about" , (req , res) => {
    res.render("about");
});

app.use(express.static(taticPath));

app.set("view engine" , "hbs");
app.set("views" , templatePath)

app.get("/" , (req , res) => {
    res.send("Hello there...")
});

app.listen(port , () => {
    console.log(`Server listen to the port no ${port}`);
})