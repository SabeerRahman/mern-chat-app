import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${dbConnection.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection Error", error);
  }
};
