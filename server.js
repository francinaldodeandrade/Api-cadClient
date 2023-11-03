import app from "./src/app.js"

const hostName = process.env.HOSTNAME
const port = process.env.PORT

app.listen (port, () =>{
    console.log(`servidor executando no seguinte http://${hostName}:${port}`);
})