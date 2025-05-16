import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error : ", error);
    process.exit(1);
  }
};

export default connectToDB;
