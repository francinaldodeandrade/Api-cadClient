// index.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://natal_service_db_users:xVRHgDpt7DFyCeOO@cluster0.zvc7nog.mongodb.net/"

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB Atlas!");

    const database = client.db("meuBanco"); // nome do seu banco
    const collection = database.collection("db_client");

    // Exemplo: inserir um documento
    const result = await collection.insertOne({ 
       nome: {
        type: String,
        required: true, },

    apelido: {
        type: String,
        required: true,
    },

    localidade:{
        type: String,
        required: true,
        
    },

    cidade:{
        type: String,
        required: true,
    },
   
   estado: {
        type:  String,
        required: true,
    },

    telefone:{
        type: String,
        
    },

    cpf:{
        type: String,
        
    },

    rg:{
        type: String,
        
    },

    data_serv:{
        type: Date,
        
    },

    number_os:{
        type: String,
        
    },

    equip:{
        type: String,
        
    },

    number_vc:{
        type: String,
        
    },

    qtd_ord:{
        type: String,
        
    }

    
    });
    console.log("Documento inserido com ID:", result.insertedId);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

