const Router = require("express").Router();
const VIEW = require("./view")

//ststus 
Router.get("/status",(req,res)=>{
    res.status(200).json({messge: "server is up!!!"})
});

//register
Router.post("/register",[],VIEW.register);

//login
Router.post("/login",[],VIEW.login);

//authorize
Router.post("/auth",[],VIEW.authorize);

//logout
Router.post("/logout",[],VIEW.logout);


module.exports=Router;