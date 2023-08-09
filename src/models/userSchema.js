import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    
    prod: {
        type: String,
        required: true },

    marca: {
        type: String,
    },

    valor: {
        type: String,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
},

   { timestamps: true } // armazena a data de cadastro
   );
   
   export default mongoose.model("prod", esquema); // o mongoose cria uma coleção para usuários no BD*/