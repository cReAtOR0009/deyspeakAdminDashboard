const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");

const expressLayouts = require("express-ejs-layouts");

// Dotenv Configuration;
dotEnv.config();

// express Configuration
const app = express();
const PORT = process.env.PORT || 3000;
 
//Database Connection;
dbConnection();

// Ejs Configuration

// app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//use parse json request
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));     
 
// Cor Configuration  
app.use(cors());                                                                                
  
// fetch("http://localhost:3000/admin/language",{ method:"GET", headers: { "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjFjNzk3NmRkYWVkNzAwNzQxYzIzOSIsInJvbGUiOjIsImlhdCI6MTY4ODI1NDM4NSwiZXhwIjoxNjg4NDI3MTg1fQ.hx0GqnD9CV2OvJwipgY_MNpllAlt_fJAWEJq4TZ8onI" }})
app.use("/admin", require("./routes/adminRoutes"));
app.use("/admin/language", require("./routes/languageRoutes"))


const myMiddleware = (req, res, next) => {
    console.log("server running");
    next();
}   

app.get("/", myMiddleware, (req, res, next) => res.send("admin Server Running"));
 
app.use((err, req, res, next) => {
    res.status(500).send({
        status:500,
        message:err.message, 
        data:{}
    });                   
});            

app.listen(PORT, () => console.log(`Admin server Started on ${PORT}`))