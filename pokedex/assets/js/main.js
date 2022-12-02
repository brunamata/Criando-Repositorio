const { json } = require("server/reply");

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => '<li class="type">$(typeSlot.type.name)</li>')
}

function convertPokemonToLI(pokemon){
    return '\
    <li class="pokemon"> \
        <span class="number">$(pokemon.order)</span> <!-- numero do pokemon -->\
        <span class="name">$(pokemon.name)</span>\
\
        <div class="detail">  <!-- detalhes do pokemon -->\
            <ol class="types"> <!-- onde entra a lista de tipos do pokemon -->\
                $(convertPokemonsTypesToLi(pokemon.types).join("")))\
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

