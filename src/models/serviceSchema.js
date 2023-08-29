import mongoose from "mongoose";

const esquema = new mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,

    Proc: {
        type: String,
        required: true, },

    Prof: {
        type: String,
    },

    Date: {
        type:  mongoose.Schema.Types.Date,
        required: true,
    },

    Hour: {
        type:  mongoose.Schema.Types.Hour,
        required: true,
    },

    Client:{
        type: String,
        required
    },

    Promo:{
        type: String,
        required
    },

    price:{
        type: String,
        required
    }

},

   { timestamps: true } // armazena a data de cadastro
   );
   
   export default mongoose.model("service", esquema); // o mongoose cria uma coleção para usuários no BD*/