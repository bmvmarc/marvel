import './charInfo.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import Skeleton from '../skeleton/Skeleton'

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    serv = new MarvelService()
    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.selectedChar === this.props.selectedChar) {
            return;
        }
        
        this.updateChar();  
    }

    updateChar = () => {

        if ( !this.props.selectedChar ) return;      

        this.setState({loading: true});
        
        this.serv.getCharacter(this.props.selectedChar)
            .then(this.onCharLoaded)
            .catch(this.onError)      
    }

    onCharLoaded = (char) => {
        this.setState(
            {
                char, 
                loading: false
            }
        )
    }

    onError = (err) => {
        
        this.setState(
            {
                char: null,
                loading: false, 
                error: true
            }
        )
    }
    
    render () {

        const {loading, char, error} = this.state;

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

export default CharInfo;