import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("error", (err) => {
      console.error("We have some error: " + err);
      process.exit();
    });
    console.log("connected to db");
  } catch (error) {
    console.error("Something went wrong:\n");
    console.error(error);
  }
}
