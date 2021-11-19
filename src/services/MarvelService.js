

export default class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=8cf3a3e4276e9a02be2289bf4ce358a0';

    getResource = async ( url ) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }


    getAllCharacters = async () => {
        try {
            const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
            return res.data.results.map(i => this._transformCharacter(i));
        }
        catch (err) {
            console.log(err);
            return []
        }        
    }

    getCharacter = async (id) => {
        // try {
            const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
            return this._transformCharacter(res.data.results[0]);
        // }
        // catch (err) {
        //     console.log(err);
        //     return null
        // }                    
    }

    _transformCharacter = (char) => {

        const description = char.description.length > 220 ? (char.description.substr(0, 220) + '...') : char.description;

        return {
            name: char.name,
            description: description || 'No description',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }

}

