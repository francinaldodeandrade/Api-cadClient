import express from 'express'
const app = express()

import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

import Model from '../models/dialogflowSchema.js'

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

  switch(intencao) {
    case 'VerCardapio': 
      resposta = Model.verCardapio( mensagem, parametros );
      break;
    case 'verStatus':
      resposta = Model.verStatus( mensagem, parametros );
      break;
    default: 
      resposta = {tipo: 'texto', mensagem: 'Sinto muito, não entendi o que você deseja'}
  }


  /*let meuCardapio = [];
  let menuItem = {};

  for (let i=0; i<resposta.cardapio.length; i++) {
    menuItem = {
        "card": {
          "title": resposta.cardapio[i].titulo,
          "subtitle": resposta.cardapio[i].preco,
          "imageUri": resposta.cardapio[i].url,
        }
    }
    meuCardapio.push(menuItem)
  }*/


if ( resposta.tipo == 'texto') {
  responder = {
    "fulfillmentText": "Resposta do Webhook",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            resposta.mensagem
          ]
        }
      }
    ],
    "source": "",
  }
} else if ( resposta.tipo == 'imagem' ) {
  responder = {
    "fulfillmentText": "Resposta do Webhook",
    "fulfillmentMessages": [
      {
        "image": {
          "imageUri": resposta.url,
        }
      }
    ],
    "source": "",
  }
} /*else if ( resposta.tipo == 'card' ) {
  responder = {
    "fulfillmentText": "Resposta do Webhook",
    "fulfillmentMessages":  meuCardapio,
    "source": "",
  }
}*/

console.log("resposta final", responder)

  res.send(responder);
} 

export default {
  webhook_dialogflow,
  readDialogflow
}