/*window.onload =  function (){

   Id.addEventListener('click', buscarCliet)
 
 }*/
 
 function buscarCliet(){
     //const txtCompl = document.querySelector('#Id').value
     const apiCliets =`https://api-cadastro.onrender.com/readClient`
     //const apiCliet = `https://api-cadastro.onrender.com/searchCliet/${txtCompl}` 

     const listCliet = document.querySelector('#users')
    
    fetch (apiCliets)
     .catch((error) => console.log(error))
     .then((retCliet) => retCliet.json())
     .then((resp) => {
       const Users = (resp.data.cliets)
       Users
       .sort((a, b) =>a.Name.localeCompare(b.Sname))
       .map((user) => {
       /*let listagem = document.createElement('<option>')

          listagem.innerHTML += ( `
          
            ${user.Name}  ${user.Sname}
                    
     `)
      listCliet.appendChild(listagem)*/
      listCliet.innerHTML += `
      <option value=${user._id}>${user.Name}  ${user.Sname}</option>
      `
    })
  })
}

buscarCliet()

function handleCliet(id) {
 const name = document.querySelector('#nome')
 const firstName = document.querySelector('#sNome')
 const redeSocial = document.querySelector('#redeSocial')
 const fone = document.querySelector('#whatsapp')
 const identfication = document.querySelector('#Id')
 
 const apiCliet = `https://api-cadastro.onrender.com/searchCliet/${id}` 
 fetch(apiCliet)
 .catch((error) => console.log(error))
     .then((retCliet) => retCliet.json())
     .then((resp) =>{
      const User = (resp.data.cliet)
      console.log(User);
      name.value = User.Name
      firstName.value = User.Sname
      redeSocial.value = User.RedeS
      fone.value = User.Fone 
      identfication.value = User._id
     })
}

function delCliet() {
  const identfication = document.querySelector('#Id').value
  
  const apiCliet = `https://api-cadastro.onrender.com/removeCliet/${identfication}` 
 fetch(apiCliet)
 .catch((error) => alert(message, error))
    
     .then(message)
}

