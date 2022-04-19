const express = require("express");
const app = express();

const config = require("./config");
const router = require("./router");
const {connectToDB} = require("./dbManager/mongoConnect");

connectToDB();

app.use("/auth",router);

app.listen(config.PORT,(err)=>{
    if(err){
        console.error(err);
        return 1;
    }
    console.log(`server runnin on port ${config.PORT}`);
})