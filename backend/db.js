const mongoose = require('mongoose');
const dbURL="mongodb+srv://avulasneha123:rXx1UdW0WFLJz8nq@cluster0.uaz39cp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    await mongoose.connect(dbURL,{useNewUrlParser:true},async(err,res) =>{
        if(err) console.log("---",err)
        else{
            console.log('Mongo connected');
        }
    });
}

module.exports = connectDB;


