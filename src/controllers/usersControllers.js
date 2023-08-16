//import bcrypt from "bcrypt"
import esquema from "../models/userSchema.js"
//AQUI EU MONTO O CRUD

/*const getAll = (req, res) =>{
    res.status(200).send({
    message:"bateu na rota GET para usuários"
    })
    
        console.log("comunicação com navegador estabelecida")
    
    }*/

//GET = lista todos os usuérios do banco de dados

const getAll = async (req, res) => {
    try{
   const allProd = await esquema.find() // o esquema do produto importado faz uma busca de todos os produtos no banco de dados
   if (!allProd) {
    res.status(500).send({
    statusCode: 500,
    message:err.message
})
} 

res.status(200).send({
    statusCode:200,
    data:{
    allProd,
}
}) 

} catch (err) {
    console.error(err)
  }
}

const createProd = async (req, res) => { //defino que a função é assicrona
    //console.log("requisição", req);
    try{
        const newProd = new esquema(req.body) // recebo o que vem do body da requisição e uso o esquema definido 
        
        console.log(newProd); // imprimir os dados no terminal

        const savedProd = await newProd.save() //espero que o usuário seja salvo no banco
        
        res.status(201).send({
            statusCode:201,
            data:{
            savedProd,
        }
        }) 

    } catch (err) {
         console.error(err)
         res.status(500).send({
            statusCode: 500,
            message:"Produto não cadastrado"
        })
         
    }

 
}

export default {
    getAll,
    createProd,
}



