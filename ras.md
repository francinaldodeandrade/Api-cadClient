const getAll = (req, res) =>{
res.status(200).send({
message:"bateu na rota GET para usuários"
})

    console.log("comunicação com navegador estabelecida")

}

URI = mongodb+srv://naldoanalista:23107Fas@paula.0xctoy6.mongodb.net/

const createProd = async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;

    try {
        const newProd = new esquema(req.body);

        const savedProd = await newProd.save();

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

URI = mongodb+srv://E-comerceTera:2310-Fas@cluster0.c1s6qzw.mongodb.net/
