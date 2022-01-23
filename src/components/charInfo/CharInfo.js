import './charInfo.scss';
import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import Skeleton from '../skeleton/Skeleton'
import PropTypes from 'prop-types';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const serv = new MarvelService()
    
    // componentDidUpdate(prevProps, prevState) {

    //     if (prevProps.selectedChar === this.props.selectedChar) {
    //         return;
    //     }
    //     updateChar();  
    // }

    useEffect(() => {
        updateChar();
    }, [props.selectedChar]);


    const updateChar = () => {

        if ( !props.selectedChar ) return;      

        setLoading(true);
        
        serv.getCharacter(props.selectedChar)
            .then(onCharLoaded)
            .catch(onError)      
    }

    const onCharLoaded = (char) => {
        setLoading(false);
        setChar(char);
    }

    const onError = () => { 
        setLoading(false);
        setError(true);
        setChar(null);
    }
    
    const skeleton = !(loading || error || char) ? <Skeleton/> : null;
    const errorMessage = error ? <Error/> : null;
    const spinner = loading ? <Spinner/> : null;
    const view = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {errorMessage}
            {spinner}
            {skeleton}
            {view}
        </div>
    )        
}

const View = ({char: {name, description, thumbnail, homepage, wiki, comics}}) => {
    return (<>
                <div className="char__basics">
                <img 
                    style={ thumbnail.includes('image_not_available.jpg') ? {objectFit: 'fill'} : {}}
                    src={thumbnail}
                    alt={name}
                />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">wiki</div>
                        </a>
                    </div>
                </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    <Comics comicsList={comics}/>
                </ul> 
            </>
    );
}

const Comics = ({comicsList}) => {
    return (
        comicsList.slice(0, 10).map((i, key) => (
            <li key={i.resourceURI} data-url={i.resourceURI} className="char__comics-item">
                {i.name}
            </li>
        ))
    );
}

CharInfo.propTypes = {
    selectedChar: PropTypes.number
}

export default CharInfo;