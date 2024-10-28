const mongoose = require('mongoose')

const username = 'tejas07';
const password = 'Tejas123';
const dbName = 'crud';  // Replace with your database name
const clusterEndpoint = 'cruddb.cluster-cr6kmqiw62yn.ap-south-1.docdb.amazonaws.com:27017';
const caFilePath = '/home/ubuntu/crud-app-mern/Backend/global-bundle.pem';  // Ensure the CA file path is correct
const url = `mongodb://${username}:${password}@${clusterEndpoint}/${dbName}?tls=true&tlsCAFile=${caFilePath}&retryWrites=false`;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
