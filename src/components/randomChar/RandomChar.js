import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
 
class RandomChar extends Component {

    state = {
        char: null,
        loading: true,
        error: false
    }

    serv = new MarvelService()
    
    componentDidMount() {
        this.updateChar();  
    }

    updateChar = () => {
        this.setState({loading: true});

        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        
        this.serv.getCharacter(id)
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

        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const view = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {view}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner" onClick={this.updateChar}>try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        );

    }

}

const View = ({char: {name, description, thumbnail, homepage, wiki}}) => {
    return (
            <div className="randomchar__block">
                
                <img 
                    style={ thumbnail.includes('image_not_available.jpg') ? {objectFit: 'fill'} : {}}
                    src={thumbnail} 
                    alt={name} 
                    className="randomchar__img"
                />
                
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>  
    );
}

export default RandomChar;