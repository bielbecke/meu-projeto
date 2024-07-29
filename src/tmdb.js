const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

/*
-originais
-recomendados
-em alta
-ação
-comédia
-terror
-romance
-documentários
*/

const basicFetch = async (endpoint) => {
    
}

export default {
  getHomeList: async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            itens: []
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            itens: []
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            itens: []
        },
        {
            slug: 'action',
            title: 'Ação',
            itens: []
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            itens: []
        },
        {
            slug: 'horror',
            title: 'Terror',
            itens: []
        },
        {
            slug: 'romance',
            title: 'Romance',
            itens: []
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            itens: []
        },
    ]
  }  
}