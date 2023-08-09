import bcrypt from "bcrypt"
import esquema from "../models/userSchema.js"
//AQUI EU MONTO O CRUD

//GET = lista todos os usuérios do banco de dados
const getAllProds = async (req, res) => {
   try {const prods = await esquema.find();  
    /*if (!users) {
        res.status(500).send(
            {statusCode: 500,
            message: err.message,});
        }*/
        
        res.status(200).send({ 
            statusCode: 200,
            data: {prods,},
        }
        );
   } catch (e) {
        console.error(e);
    }

} 

const createProds = async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    
    try {
        const newProds = new esquema(req.body);

        const savedProds = await newProds.save();

        res.status(201).send({
            statusCode: 201,
            data: {
                savedProds,
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
    getAllProds,
    createProds,
}



