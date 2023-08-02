// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     const connect = await mongoose.connect("mongodb+srv://admin:admin@karan01.617idhx.mongodb.net/contactmanager?retryWrites=true&w=majority");
//     // console.log(
//     //   "Database connected:",
//     //   connect.connection.host,
//     //   connect.connection.name
//     // );
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDb;
const { MongoClient } = require("mongodb");
const username = "admin";
const password = "admin";
const clusterName = "karan01.617idhx";
const dbName = "contactmanager"; // The name of your database

const uri = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const connectdb = async () => {
  try
  {
    await client.connect();
  }
  catch(e)
  {
    console.log(e);
  }
}
