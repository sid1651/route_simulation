import mongoose from 'mongoose';

const connectDB=async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("MongoDB connected successfully");
    })
    mongoose.connection.on('error',(err)=>{
        console.error("MongoDB connection error:",err);
    });
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:'RouteS'
        })
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB;