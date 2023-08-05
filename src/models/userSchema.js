import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,},

    nickname: {
        type: String,
    },

    email: {
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
   
   export default mongoose.model("user", esquema); // o mongoose cria uma coleção para usuários no BD*/