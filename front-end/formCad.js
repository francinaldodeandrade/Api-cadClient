
window.onload =  function (){

   /*cep.addEventListener('click', function (){
     console.log('cliquei');
   })

   rua.addEventListener('blur', function (){
    console.log('tirou o foco');
  })*/

  //cep.addEventListener('blur', buscarCep)
  id.addEventListener('blur', buscarCliet)

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

function buscarCliet(){
    const txtCompl = document.querySelector('#complemento').value
    const apiCliets =`https://api-cadastro.onrender.com/searchCliet/${txtCompl}` 
    const name = document.querySelector('#nome')
    const firstName = document.querySelector('#sNome')
    const redeSocial = document.querySelector('#redeSocial')
    const fone = document.querySelector('#whatsapp')
   
   fetch (apiCliets)
    .catch((error) => console.log(error))
    .then((retCliet) => retCliet.json())
    .then((resp) => {

    const Users = (resp.data.cliet)

      name.value = Users.Name
      firstName.value = Users.Sname
      redeSocial.value = Users.RedeS
      fone.value = Users.Fone 

      /* Users.map((user)=>{
            name.value = user.Name
            firstName.value = user.Sname
            redeSocial.value = user.RedeS
            fone.value = user.Fone 
     })*/
     
    })
}



