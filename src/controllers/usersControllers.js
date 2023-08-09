import bcrypt from "bcrypt"
import esquema from "../models/userSchema.js"
//AQUI EU MONTO O CRUD

//GET = lista todos os usuérios do banco de dados

const getAll = async (req, res) => {
   try {const Prod = await esquema.find();  
    /*if (!users) {
        res.status(500).send(
            {statusCode: 500,
            message: err.message,});
        }*/
       
        
        res.status(200).send({ 
            statusCode: 200,
            data: {Prod,},
        }
        );
   } catch (e) {
        console.error(e);
    }

} 

const createProd = async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    
    try {
        const newProd = new esquema(req.body);

        const savedProd = await newUsers.save();

        res.status(201).send({
            statusCode: 201,
            data: {
                savedProd,
            },
        }
        );
    } catch (e) {
        console.error(e);
        res.status(500).send({
            statusCode: 500,
            message: "Produto não cadastrado",
        }); 
    }};    




export default {
    getAll,
    createProd,
}



