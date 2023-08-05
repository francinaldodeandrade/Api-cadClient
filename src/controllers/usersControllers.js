import bcrypt from "bcrypt"
import esquema from "../models/userSchema.js"
//AQUI EU MONTO O CRUD

//GET = lista todos os usuérios do banco de dados
const getAll = async (req, res) => {
   try {const users = await esquema.find();  
    /*if (!users) {
        res.status(500).send(
            {statusCode: 500,
            message: err.message,});
        }*/
        
        res.status(200).send({ 
            statusCode: 200,
            data: {users,},
        }
        );
   } catch (e) {
        console.error(e);
    }

} 

const createUser = async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;
    
    try {
        const newUser = new esquema(req.body);

        const savedUser = await newUser.save();

        res.status(201).send({
            statusCode: 201,
            data: {
                savedUser,
            },
        }
        );
    } catch (e) {
        console.error(e);
        res.status(500).send({
            statusCode: 500,
            message: "User not saved",
        }); 
    }};    




export default {
    getAll,
    createUser
}



