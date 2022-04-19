const PORT = process.env.PORT || 4000;
const MONGO_URL = "mongodb://localhost/users" || process.env.MONGO_URL;


module.exports ={PORT,MONGO_URL}