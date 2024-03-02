import mongoose from 'mongoose';


const DBConnection=async()=>{
    const MONGODB_URL=`mongodb://dlakshman645:Lucky645@ac-emsml3h-shard-00-00.jwkveki.mongodb.net:27017,ac-emsml3h-shard-00-01.jwkveki.mongodb.net:27017,ac-emsml3h-shard-00-02.jwkveki.mongodb.net:27017/?ssl=true&replicaSet=atlas-10hb5p-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-project`;
    try{
  await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
  console.log("Database connected Successfully");  
}
    catch(error){
  console.error('Error while connection with the database',error.message);
    }
}
export default DBConnection;