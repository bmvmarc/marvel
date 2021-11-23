import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

class CharList extends Component {

    serv = new MarvelService();

    state = {
        list: [],
        loading: true,
        error: false,
        offset: 210,
        charsEnded: false
    }


    loadMoreWhenScrolledToBottom = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.updateList(9);
        }        
    }

    componentDidMount() {
        this.updateList();

        window.addEventListener('scroll', this.loadMoreWhenScrolledToBottom);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMoreWhenScrolledToBottom);
    }

    updateList = (offsetShift=0) => {
        
        const newOffset = this.state.offset + offsetShift;

        this.setState({
            loading: true,
            error: false,
            offset: newOffset
        });

        this.serv.getAllCharacters(newOffset)
            .then(this.onListLoaded)
            .catch(this.onError);
    }

    onListLoaded = (list) => {

        const ended = list.length < 9;

        this.setState((state) => ({
            list: [...state.list, ...list],
            loading: false,
            charsEnded: ended
        }))
    }

    onError = (err) => {
        this.setState({
            list: [],
            error: true,
            loading: false
        })
    }

    onClickLoadMore = () => {
        this.updateList(9);
    }

    render() {

        const {list, loading, error} = this.state; 
        
        const {onCharSelect} = this.props;

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <Error/> : null;


        const listChar = list.map((i) => 
                    <li key={i.id} className="char__item" onClick={() => onCharSelect(i.id)}>                        
                        <img 
                            style={ i.thumbnail.includes('image_not_available.jpg') ? {objectFit: 'fill'} : {}}
                            src={i.thumbnail} 
                            alt={i.name}/>
                        <div className="char__name">{i.name}</div>
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
                    className="button button__main button__long"
                    onClick={this.onClickLoadMore}
                    disabled={loading}
                    style={{display: this.state.charsEnded ? 'none' : 'block' }}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }    
}

export default CharList;