import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
