const contenido = document.querySelector('.contenido')
const favoritoContenido = document.querySelector('.favoritos')

let arregloPersonajes = []
let favorito = []

// Petición de la tabla
function tablaRickAndMorty() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(resultadoTabla => resultadoTabla.json())
        .then(datosTabla => {
            arregloPersonajes = datosTabla.results
            recorrerPersonajes(arregloPersonajes)  
        })
        .catch((error => {
            console.log(error)
        }))
}

// Funcion para recorrer los personajes y mostrarlos

function recorrerPersonajes(arregloPersonajes) {
    contenido.innerHTML = ''
    arregloPersonajes.forEach(elemento => {
        contenido.innerHTML += `                
                <tr>
                    <td scope="row">${elemento.id}</td>
                    <td><img src="${elemento.image}" alt="elemento.name"></td>
                    <td>${elemento.name}</td>
                    <td>${elemento.species}</td>
                    <td>${elemento.location.name}</td>
                    <td><button class="btn btn-info" onclick ="agregarFavorito(${elemento.id})">Agregar Favorito</button></td>
                </tr>
                `
    })
}

// Funcion BorrarPersonajes

/* function borrarPersonajes() {
    contenido.innerHTML = ''
} */

// Funcion para agregar a favoritos

function agregarFavorito(id) {

    let agregar = arregloPersonajes.find(elemento => elemento.id === id)
    favorito.push(agregar)
    favoritoContenido.innerHTML = ''
    favorito.forEach(elemento => {
        favoritoContenido.innerHTML += `                
                <tr>
                    <td scope="row">${elemento.id}</td>
                    <td><img src="${elemento.image}" alt="elemento.name"></td>
                    <td>${elemento.name}</td>
                    <td>${elemento.species}</td>
                    <td>${elemento.location.name}</td>
                </tr>
                `
    })
}

// Funcion para Borrar Favoritos

function borrarFavorito() {
    favoritoContenido.innerHTML = ''
    favorito = []
}

// Llamar la funcion para ver los personajes
tablaRickAndMorty()

// Buscador de personajes

function buscarPersonaje() {

    contenido.innerHTML = ""
    const personaje = document.getElementById("busqueda").value.toLowerCase()

    const filtroPersonaje = arregloPersonajes.filter(personajeNombre => {  
        return personajeNombre.name.toLowerCase().includes(personaje)
    })

    filtroPersonaje.forEach(elemento => {
        contenido.innerHTML += `                
        <tr>
            <td scope="row">${elemento.id}</td>
            <td><img src="${elemento.image}" alt="elemento.name"></td>
            <td>${elemento.name}</td>
            <td>${elemento.species}</td>
            <td>${elemento.location.name}</td>
            <td><button class="btn btn-info" onclick ="agregarFavorito(${elemento.id})">Agregar Favorito</button></td>
        </tr>
        `
    })

}

// Borrar campo introducido en el input

function borrarValue (){
    document.getElementById("busqueda").value = "";
    tablaRickAndMorty()
}