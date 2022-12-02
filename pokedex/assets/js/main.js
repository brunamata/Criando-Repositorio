const { json } = require("server/reply");

const pokemonList = document.getElementById('pokemonList'); 
const LoadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 151;
const limit = 5
let offset = 0;



function loadPokemonItens(offset, limit){

    pokeApi.getPokemons(offset, limit).then((pokemons = [])=> {

        pokemonList.innerHTML += pokemons.map((pokemon) => 
         '  <li class="pokemon $(pokemon.type)"> \
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
        ).join('');
        //.map retorna uma lista transformada sem precisar da estrutura antiga do for
        //.join junta todos os elementos em string com separador dentro do () - eh vazio, nesse caso
    
        })
}

loadPokemonItens(offset, limit); //logo q começa ja carrega com os dados atuais

LoadMoreButton.addEventListener('click', ()=> {
    offset += limit;
    const qtdRecordNexPage = offset + limit;

    //remover botao quando ultrapassa a qtd maxima
    if(qtdRecordNexPage >= maxRecords){ 

        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        LoadMoreButton.parentElement.removeChild(LoadMoreButton);
    }else{
        loadPokemonItens (offset, limit); //se n atingiu o max continua carregando mais
    }
})



