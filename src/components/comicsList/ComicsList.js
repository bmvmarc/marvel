import './comicsList.scss';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';
import propTypes from 'prop-types';

const ComicsList = (props) => {
    const { loading, error, getAllComics } = useMarvelService();

    const [list, setList] = useState([]);    
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        loadComics();
    }, []);

    const loadComics = () => {
        console.log(offset)
        setOffset(offset => offset + 8);
        getAllComics( offset ).then( onComicsLoaded );

    }

    const onComicsLoaded = (resList) => {
        setList(list => [...list, ...resList]);
        if ( resList.length < 8 ) {
            setComicsEnded(true);
        }
        setInitial(false);        
    }

    const comicsList = list.map((item, i) => (<>
        <li key={item.id} 
            className="comics__item">
            
            <a href="#">
                <img 
                    style={ item.thumbnail.includes('image_not_available.jpg') ? {objectFit: 'cover', objectPosition: 'left bottom'} : {}}
                    src={item.thumbnail} 
                    alt="comics title" 
                    className="comics__item-img"/>
                <div className="comics__item-name">{item.title}</div>
                <div className="comics__item-price">{`${item.price}$`}</div>
            </a>
            
        </li>       
    </>));

    const errorMessage = error ? <Error/> : null;
    const spinner = initial ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}            
            <ul className="comics__grid">
                {comicsList}    
            </ul>
            <button 
                className="button button__main button__long"
                style={{ display: comicsEnded || loading ? 'none' : 'block' }}
            >
                <div className="inner" onClick={loadComics}>load more</div>
            </button>
        </div>
    )
}

ComicsList.propTypes = {
    onComicsSelect: propTypes.func
}

export default ComicsList;