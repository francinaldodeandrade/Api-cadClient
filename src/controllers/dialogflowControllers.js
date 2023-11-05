import express from 'express'
const app = express()

import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//import Model from '../models/dialogflowSchema.js'

const readDialogflow = (req, res) =>{
  res.status(200).send({
  message:"comunicação com o dialogflow estabelecida com sucesso",
  texto:"servidor local em execução nesta porta de comunicação"
  })
  
      console.log("comunicação com dialogflow estabelecida")
  
  }


const webhook_dialogflow = (req, res) =>{
  
  const mensagem = req.body.queryResult.queryText;
  const intencao = req.body.queryResult.intent.displayName;
  const parametros = req.body.queryResult.parameters;
  let responder = ""

  if (parametros && parametros.nao_Vendemos) {

    responder = `desculpe, nós não trabalhamos com ${parametros.nao_Vendemos}`
    console.log("body", req.body.queryResult);
    console.log(intencao);
    console.log(mensagem);
    
  } 

  if (intencao == 'verCardapio') {
    responder = `${responder}, nosso cardápio está em fase de elaboração`
  }


  if (intencao == 'verStatus') {
    responder = `ainda não temos pedido`
  }

  return responder

  /*if (intencao == 'verStatus') {
    fetch("https://api-cadastro.onrender.com/readClient") //API cadastro de produtos
      .then((response) => response.json())
      .then((res) => {
      console.log(res.data.cliets)
  })
     
    responder = res.data.cliets.Name
    
  }*/
  

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

  console.log("responder final", resposta)

  res.send(resposta);
} 

export default {
  webhook_dialogflow,
  readDialogflow
}

   /*switch(intencao) {
    case 'VerCardapio': 
      responder = Model.verCardapio( mensagem, parametros );
      break;
    case 'verStatus':
      responder = Model.verStatus( mensagem, parametros );
      break;
    default: 
      responder = {tipo: 'texto', mensagem: 'Sinto muito, não entendi o que você deseja'}
  }


 let meuCardapio = [];
  let menuItem = {};

  for (let i=0; i<responder.cardapio.length; i++) {
    menuItem = {
        "card": {
          "title": responder.cardapio[i].titulo,
          "subtitle": responder.cardapio[i].preco,
          "imageUri": responder.cardapio[i].url,
        }
    }
    meuCardapio.push(menuItem)
  }


if ( responder.tipo == 'texto') {
  responder = {
    "fulfillmentText": "responder do Webhook",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            responder.mensagem
          ]
        }
      }
    ],
    "source": "",
  }
} else if ( responder.tipo == 'imagem' ) {
  responder = {
    "fulfillmentText": "responder do Webhook",
    "fulfillmentMessages": [
      {
        "image": {
          "imageUri": responder.url,
        }
      }
    ],
    "source": "",
  }
} /*else if ( responder.tipo == 'card' ) {
  responder = {
    "fulfillmentText": "responder do Webhook",
    "fulfillmentMessages":  meuCardapio,
    "source": "",
  }
}*/

