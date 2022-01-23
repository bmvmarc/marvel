import './charList.scss';
import { useState, useEffect, useRef } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import PropTypes from 'prop-types';

const CharList = (props) => {
 
    const serv = new MarvelService()

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [shift, setShift] = useState(210);
    const [charsEnded, setCharsEnded] = useState(false);

    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                setShift(shift => shift + 9);
            }
        }
        const observer = new IntersectionObserver(callback, options);      
        observer.observe(document.getElementById('observer'));  
    }, []);

    useEffect(() => {
        console.log('eff', shift)
        updateList()
    }, [shift]);

    const updateList = () => {
        setLoading(true);
        setError(false);

        serv.getAllCharacters(shift)
            .then(onListLoaded)
            .catch(onError);
    }

    const onListLoaded = (newListPart) => {
        setList(list => [...list, ...newListPart]);
        setLoading(false);
        setCharsEnded(newListPart.length < 9);
    }

    const onError = () => {
        setList([]);
        setError(true);
        setLoading(false);
    }

    const onClickLoadMore = () => {
        updateList();
    }

    const itemRefs = useRef({});

    const focusOnItem = (id) => {
        for (const value of Object.values(itemRefs.current)) {
            if (value) {
                value.classList.remove("char__item_selected")
            }
          }

        itemRefs.current[id].focus()
        itemRefs.current[id].classList.add("char__item_selected")
    }

    const setRef = elem => {
        if (elem) {
            const id = elem.getAttribute('data-id')
            itemRefs.current[id] = elem 
        }
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <Error/> : null;

    const listChar = list.map((item, i) => 
                <li key={item.id} 
                    ref={setRef} 
                    data-id={item.id}
                    className="char__item" 
                    onClick={() => {
                        props.onCharSelect(item.id)
                        focusOnItem(item.id)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            props.onCharSelect(item.id)
                            focusOnItem(item.id)
                            e.preventDefault()
                        }
                    }}
                    tabIndex={0}>

                    <img 
                        style={ item.thumbnail.includes('image_not_available.jpg') ? {objectFit: 'fill'} : {}}
                        src={item.thumbnail} 
                        alt={item.name}/>
                    <div 
                        className="char__name">
                            {item.name}
                    </div>
                    {spinner}
                    {errorMessage}
                </li>
                );

    const listErrLoad = []; 
    for (let i = 0; i < 6; i++) {
        listErrLoad.push(
            <li style={{padding: 0, display: 'flex', alignItems: 'center', backgroundColor: 'white'}} key={i} className="char__item">
                {spinner}
                {errorMessage}
            </li>
        )
    }

    return (
        <div className="char__list">
            <ul className="char__grid">
                {!( loading || errorMessage) ? listChar : listErrLoad}    
            </ul>
            <button 
                id='observer'
                className="button button__main button__long"
                onClick={onClickLoadMore}
                disabled={loading}
                style={{display: charsEnded ? 'none' : 'block' }}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelect: PropTypes.func
}

CharList.defaultProps = {
    onCharSelect: () => {
        console.log('default behavior')
    }
}


export default CharList;