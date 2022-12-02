const { json } = require("server/reply");

function convertPokemonToLI(pokemon){
    return '\
    <li class="pokemon"> \
        <span class="number">#001</span> <!-- numero do pokemon -->\
        <span class="name">$(pokemon.name)</span>\
\
        <div class="detail">  <!-- detalhes do pokemon -->\
            <ol class="types"> <!-- onde entra a lista de tipos do pokemon -->\
                <li class="type">grass</li>\
                <li class="type">poison</li>\
\
            </ol>\
\
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt=$(pokemon.name)>\
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

