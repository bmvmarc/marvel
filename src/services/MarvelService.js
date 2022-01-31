import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {

    const { loading, error, request, clearError } = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=8cf3a3e4276e9a02be2289bf4ce358a0';
    const _baseOffset = 210;

    const getAllCharacters = async (offset=_baseOffset, limit=9) => {
        const res = await request(`${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(i => _transformCharacter(i));      
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);              
    }

    const getAllComics = async (offset=0, limit=8) => {
        const res = await request(`${_apiBase}comics?limit=${limit}&offset=${offset}&${_apiKey}`);
        console.log(res.data)
        return res.data.results.map(i => _transformComics(i));      
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);              
    }

    const _transformCharacter = (char) => {

        const description = char.description.length > 220 ? (char.description.substr(0, 220) + '...') : char.description;

        return {
            id: char.id,
            name: char.name,
            description: description || 'No description',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items.length ? 
                    char.comics.items.map(item => ({  id: +item.resourceURI.substring(item.resourceURI.search('/comics/') + 8),
                                                      name: item.name
                                                    })
                                             ) : 
                    [{
                        id: '', 
                        name: 'There are no comics with this character'
                    }]
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices.length ? comics.prices[0].price : 'N/A',
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us'
        }
    }    

    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic };

}

export default useMarvelService;
