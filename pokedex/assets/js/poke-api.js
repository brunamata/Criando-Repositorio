const { json } = require("server/reply");

//criando objeto
const pokeApi = {} 

    //lista de novas requisicoes
    pokeApi.getPokemonsDetail = (pokemon) => {
        return fetch(pokemon.url).then((response) => response.json())
    }

    pokeApi.getPokemons = (offset = 0, limit = 10) => {
        const url = "https://pokeapi.co/api/v2/pokemon/ \
        ?offset=${offset}&limit=${limit}" /* endereco da api */
        
        return fetch(url) /* fetch eh biblioteca - retorna proxy
        (processamento assincrono - executado n em paralelo */
            
            .then((response)=> /* =>mesma coisa q function, mas um pouco diferente */
                 response.json()) /* devolve o objeto convertido */
            .then((jsonBody)=>jsonBody.results) 
            .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail)) 
            .then((detailRequests) => Promise.all(detailRequests))
        }       

    //lista de novas requisicoes
    Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon/1'),
        fetch("https://pokeapi.co/api/v2/pokemon/2"),
        fetch("https://pokeapi.co/api/v2/pokemon/3"),
        fetch("https://pokeapi.co/api/v2/pokemon/4")
    ]).then((results) => {
        cons-ole.log(results);
    })
