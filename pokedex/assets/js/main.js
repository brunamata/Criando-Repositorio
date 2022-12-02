const { json } = require("server/reply");

const offset = 0;
const limit = 10;
const url = "https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}" /* endereco da api */

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

  pokeApi.getPokemons().then((pokemons)=> {
        const listItens = {};

        pokemons.map(); //retorna uma lista transformada

        for(let i=0; i<pokemons.lenght; i++){
           const pokemon = pokemons[i];
           listItens.push(convertPokemonToLI(pokemon)); //converte em lista de pokemons em html
        }
    })

