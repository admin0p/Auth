const MONGOOSE = require("mongoose");
const {MONGO_URL} = require("../config");

const connectToDB = () =>{

    MONGOOSE.connect(MONGO_URL,(err)=>{
        if(err){
            console.error(err);
            throw new Error(err);
        }
        console.log("connected to db!!");
    })
}

module.exports = {
    connectToDB
}