import mongoose from "mongoose"

const connect = async () =>{
    try {
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopoLogy:true,
        })
        console.log("conectado com o banco de dados mongo DB atlas");
    } catch (e) {
        console.error("Error: ", e.message);
    }
}

export default{ connect}