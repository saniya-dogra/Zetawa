import mongoose from "mongoose";

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("MongoDB connected");
    }
    catch(error){
        console.log("connection failed , error ", error);
    }
}

export default connectdb;