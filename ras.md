const getAll = (req, res) =>{
    res.status(200).send({
        message:"bateu na rota GET para usuários"
    })

    console.log("comunicação com navegador estabelecida")
}