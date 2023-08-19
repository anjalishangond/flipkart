import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.fdvft.mongodb.net:27017,ecommerceweb-shard-00-01.fdvft.mongodb.net:27017,ecommerceweb-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-8a6bhp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = `mongodb://${username}:${password}@ecommerce-shard-00-00.fdvft.mongodb.net:27017,ecommerce-shard-00-01.fdvft.mongodb.net:27017,ecommerce-shard-00-02.fdvft.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ilaj5d-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
   //const URL = `mongodb+srv://<username>:<password>@cluster0.pyihqaw.mongodb.net/?retryWrites=true&w=majority`;
   //const URL='mongodb+srv://anjalishangond9148:Anjalis9148@cluster0.pyihqaw.mongodb.net/?retryWrites=true&w=majority'
  //mongodb+srv://anjalishangond9148:<password>@cluster0.pyihqaw.mongodb.net/?retryWrites=true&w=majority
  const URL= `mongodb://${username}:${password}@ac-qfkedx5-shard-00-00.jafsulu.mongodb.net:27017,ac-qfkedx5-shard-00-01.jafsulu.mongodb.net:27017,ac-qfkedx5-shard-00-02.jafsulu.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-c2ao3b-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;