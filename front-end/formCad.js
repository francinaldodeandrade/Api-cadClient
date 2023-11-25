
window.onload =  function (){

   /*cep.addEventListener('click', function (){
     console.log('cliquei');
   })

   rua.addEventListener('blur', function (){
    console.log('tirou o foco');
  })*/

  cep.addEventListener('blur', buscarCep)
  complemento.addEventListener('click', buscarCliets)

}

function buscarCep(){
    const txtCep = document.querySelector('#cep').value
    const apiCep =`https://viacep.com.br/ws/${txtCep}/json/`
    const street = document.querySelector('#rua')
    const number = document.querySelector('#numero')
    const Neighborhood = document.querySelector('#bairro')
    const City = document.querySelector('#cidade')
    const state = document.querySelector('#estado')

    fetch (apiCep)
    .catch((error) => console.log(error))
    .then((retCep) => retCep.json())
    .then((resp) => {
        
        street.value = resp.logradouro
        City.value = resp.localidade
        Neighborhood.value = resp.bairro
        state.value = resp.uf
        number.focus()
        
    })
}

function buscarCliets(){
    const txtCompl = document.querySelector('#complemento').value
    const apiCliets =`https://api-cadastro.onrender.com/search${txtCompl}` 
    const name = document.querySelector('#rua')
    const fistname = document.querySelector('#numero')
    const redeSocial = document.querySelector('#bairro')
    const fone = document.querySelector('#cidade')
   
   fetch (apiCliets)
    .catch((error) => console.log(error))
    .then((retCliet) => retCliet.json())
    .then((resp) => {

    const Users = (resp.data.cliets)

       Users.map((user)=>{
            name.value = user.Name
            fistname.value = user.Sname
            redeSocial.value = user.RedeS
            fone.value = user.Fone 
     })
     
    })
}

