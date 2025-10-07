const obtenerMemes = async()=>{
    const memesContainers = document.getElementById('list-memes') // contenedor principal
    const memeTemplate = document.getElementById('meme') // meme individual

    const request = await fetch('https://api.imgflip.com/get_memes') // método para consumir la api
    // console.log(request) // respuesta del request

    const respuesta = await request.json() // parsearla para que sea legible

    // minar la información, separada por puntos .

    console.log(respuesta);

    console.log(respuesta.success);

    console.log(respuesta.data.memes[0]);

    console.log(respuesta.data.memes[0].url);

    // pintarlo
    // traer el array, pero una rebanada de 0 - 8. Por cada meme que itero, pinto
    respuesta.data.memes.slice(0,8).forEach(meme => {

        // declarar una tarjeta newMemeCard, clonando una copia del primero
        const newMemeCard = memeTemplate.cloneNode(true);

        // a la tarjeta de color negro, asignale un img
        const img = newMemeCard.querySelector('img');
        
        // asigna la URL de la imagen al atributo src del <img>.
        img.src = meme.url;

        // agregar a ese hijo llamado memeCard
        memesContainers.appendChild(newMemeCard);
    });

    // eliminar el template
    memeTemplate.remove();

}

obtenerMemes()