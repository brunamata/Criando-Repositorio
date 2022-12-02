const { json } = require("server/reply");


function convertPokemonToLI(pokemon){
    return '\
    <li class="pokemon $(pokemon.type)"> \
        <span class="number">$(pokemon.number)</span> \
        <span class="name">$(pokemon.name)</span>\
\
        <div class="detail">  \
            <ol class="types"> \
                $(pokemon.types.map((type)=> "<li class="type">$(type)</li>").join(""))\
            </ol>\
\
            <img src="$(pokemon.sprites.other.dream_world.front_default)" alt=$(pokemon.name)>\
        </div>\
        \
    </li>\
    '
}

const pokemonList = document.getElementById('pokemonList'); 

  pokeApi.getPokemons().then((pokemons = [])=> {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLI).join("") 
    //.map retorna uma lista transformada sem precisar da estrutura antiga do for
    //.join junta todos os elementos em string com separador dentro do () - eh vazio, nesse caso

    })

