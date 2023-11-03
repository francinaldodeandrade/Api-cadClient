
/* axios from 'axios'


exports.verCardapio = async ( msg, params ) => {
	let url = 'http://lorempixel.com.br/500/400/?2';
	let cardapio = [];
	let produto = {};
	let retorno = {}


	return await axios
		.get( url )
		.then ( (resultado) => {
			retorno = resultado.data.cliets;

			for( let i =0; i<retorno.length; i++) {
				produto = {
					titulo: `Cod: ${retorno[i].Codigo} - ${retorno[i].Nome}`,
					preco: `R$ ${retorno[i].Preco}`,
					url: retorno[i].Imagem
				}

				cardapio.push(produto);
			}

			let resposta = {
				tipo: 'card',
				cardapio
			}
			//return resposta
		})
		.catch( err => console.log(err) );
}*/
 
const verStatus = () => {
	let resposta = {
		tipo: 'imagem',
		url: './assents/image/black-flay'
	}

	return resposta
}

const verCardapio = () =>{
	let resposta = {
		tipo:"texto",
		mensagem: 'Calma que já estamos preparando o seu pedido'
	}

	return resposta
}

export default {
    verCardapio,
    verStatus
}