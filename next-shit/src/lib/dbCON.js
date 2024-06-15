import mongoose from "mongoose";

let isConnected = false; // To track the connection status

const dbcon = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const DB_OPTIONS = {
      dbName: process.env.DBNAME,
      user: process.env.DBUSERNAME,
      pass: process.env.DBPASSWORD,
      authSource: process.env.DBAUTHSOURCE,
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    isConnected = true;
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default dbcon;
