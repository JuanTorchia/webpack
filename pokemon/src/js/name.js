function name(data) {
    const pokemon = document.createElement('img')
    pokemon.setAttribute('src', data.sprites.back_default)
    document.body.append(pokemon)
}


export default name