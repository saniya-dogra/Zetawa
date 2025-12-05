// import mongoose from "mongoose";

// const connectdb=async()=>{
//     try{
//         await mongoose.connect(process.env.CONNECTION_URI,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//         })
//         console.log("MongoDB connected");
//     }
//     catch(error){
//         console.log("connection failed , error ", error);
//     }
// }

// export default connectdb;


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
