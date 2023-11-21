import express from 'express'
const app = express()

import axios from 'axios'

import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//import Model from '../models/dialogflowSchema.js'

//const CEP = ("https://viacep.com.br/ws/04813220/json/") //API de cep
const Url_Cliet = ("https://api-cadastro.onrender.com/readClient") //API cadastro de clientes

async function Clients() {
        const Users = await axios.get(Url_Cliet)
        const client = (Users.data.data.cliets)
        client.map((el)=> {
          return el.Name
        })
       
      }

Clients()

     

const readDialogflow = (req, res) =>{
  res.status(200).send({
  message:"comunicação com o dialogflow estabelecida com sucesso",
  texto:"servidor local em execução nesta porta de comunicação"
  })
  
      console.log("comunicação com dialogflow estabelecida")
  
  }


const webhook_dialogflow = (req, res) =>{
  
  const mensagem = req.body.queryResult.queryText; // o que o usuário escreveu
  const intencao = req.body.queryResult.intent.displayName;
  const parametros = req.body.queryResult.parameters;
  const responder = ""

  console.log(mensagem);
  console.log(intencao);
  console.log(parametros);
  console.log(responder);


  if (parametros && parametros.nao_Vendemos) {

    responder = `desculpe, nós não trabalhamos com ${parametros.nao_Vendemos}`
    
   
  } else if (intencao == 'verCardapio') {

    
    responder = 'desculpe, estamos em fase de elaboração'
    

  } else if (intencao == 'verStatus') {

    responder = `ainda não temos pedido`

  } else if (intencao == 'verCliente') {
    responder = Clients()
  }


  const resposta = {
    "fulfillmentText": "resposta do Webhook",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
           responder
          ]
        }
      }
    ],
    "source": "",
  }

  res.send(resposta)

} 

export default {
  webhook_dialogflow,
  readDialogflow
}

 