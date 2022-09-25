let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (datos) => {
    console.log(datos)
    let body = ""
    for (var i = 0; i < datos.length; i++) {      
       body+=`<tr><td>${datos[i].username}</td><td>${datos[i].email}</td></tr>`
    }
    document.getElementById('datos').innerHTML = body
    
}