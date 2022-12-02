const { json } = require("server/reply");

//criando objeto
const pokeApi = {} 

//converte o pokeApi pro nosso modelo
function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon;
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    return pokemon;

}

    //lista de novas requisicoes
    pokeApi.getPokemonsDetail = (pokemon) => {
        return fetch(pokemon.url)   
                    .then((response) => response.json())
                    .then((response) => response.json())
                    .then((pokemon) => {

                    })
    }

    pokeApi.getPokemons = (offset = 0, limit = 10) => {
        const url = "https://pokeapi.co/api/v2/pokemon/ \
        ?offset=${offset}&limit=${limit}" /* endereco da api */
        
    //--------Requisição da lista de Pokemons-------------

        return fetch(url) /* fetch eh biblioteca - retorna proxy
        (processamento assincrono - executado n em paralelo */
            
            .then((response)=> /* =>mesma coisa q function, mas um pouco diferente */
                 response.json()) /* devolve o objeto convertido */
            .then((jsonBody)=>jsonBody.results) //converte o response pra json
            .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail)) 
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokemonsDetails) => pokemonsDetails) //lista com os detalhes do pokemon
        }       

