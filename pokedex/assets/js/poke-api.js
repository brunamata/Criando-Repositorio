

//criando objeto
const pokeApi = {} 

    pokeApi.getPokemons = (offset = 0, limit = 10) => {
        const url = "https://pokeapi.co/api/v2/pokemon/ \
        ?offset=${offset}&limit=${limit}" /* endereco da api */
        
        return fetch(url) /* fetch eh biblioteca - retorna proxy
        (processamento assincrono - executado n em paralelo */
            
            .then((response)=> /* =>mesma coisa q function, mas um pouco diferente */
                 response.json()) /* devolve o objeto convertido */
            .then((jsonBody)=>jsonBody.results) 
            .catch((error) => console.error(error))        
    }       
