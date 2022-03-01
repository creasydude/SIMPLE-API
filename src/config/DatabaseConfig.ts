import mongoose from "mongoose";
import { Options } from "../api/v1/interfaces/dbInterfaces";

export const connectDatabase = async () => {
  const options: Options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  const connection = await mongoose.connect(process.env.MONGO_URI!);
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};
