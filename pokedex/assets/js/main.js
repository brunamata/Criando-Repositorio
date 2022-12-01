
const offset = 0;
const limit = 10;

const url = "https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}" /* endereco da api */
fetch(url)/* fetch eh biblioteca - retorna proxy (processamento assincrono - executado n em paralelo
    n tenho resposta imediata, mas eh promessa de response) */

    .then((response)=>{ /* =>mesma coisa q function, mas um pouco diferente */
         response.json()/* devolve o objeto convertido */
    }).then((jsonBody=>console.log(jsonBody) )/* quando der certo, faca essa funcao */
    )
    .catch((error)=> console.log(error))
    .finally(function(){
        console.log('Requisição concluída');
    })
