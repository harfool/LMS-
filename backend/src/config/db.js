import mongoose from "mongoose";
const connectDB = async()=>{
    try{
       const MONGO_URL = process.env.MONGO_URL
       console.log(`Connecting to MongoDB at ${MONGO_URL}/lms`)
      const connectionInstance =  await mongoose.connect(`${MONGO_URL}/lms `)
      console.log(`/n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`)
    }catch(err){
    console.log(`MongoDB connection error `, err)
    process.exit(1)
    }

}


export default connectDB