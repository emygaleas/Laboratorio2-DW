const obtenerGifs = async()=>{
    const gifContainers = document.getElementById('list-gifs') // contenedor principal
    const gifTemplate = document.getElementById('gif') // meme individual

    const request = await fetch('https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=cats') // método para consumir la api
    // console.log(request) // respuesta del request

    const respuesta = await request.json() // parsearla para que sea legible

    // minar la información, separada por puntos .

    console.log(respuesta);

    console.log(respuesta.data[1].images.original.url);

    const gifUrl = respuesta.data[39].images.original.url; // url valida con el gif a mostrar

    const img = document.querySelector("#gif img"); // obtener una parte del html para plasmar ahi el gif, dentro de la etiqueta img

    img.src = gifUrl;

}

obtenerGifs()