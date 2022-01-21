import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import PropTypes from 'prop-types';

class CharList extends Component {

    serv = new MarvelService()

    elems = {}

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

    focusOnItem = (id) => {
        for (const value of Object.values(this.elems)) {
            if (value) {
                value.classList.remove("char__item_selected")
            }
          }

        this.elems[id].focus()
        this.elems[id].classList.add("char__item_selected")
    }

    setRef = elem => {
        if (elem) {
            const id = elem.getAttribute('data-id')
            this.elems[id] = elem 
        }
    }

    render() {

        const {list, loading, error} = this.state; 
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <Error/> : null;

        const listChar = list.map((item, i) => 
                    <li key={item.id} 
                        ref={this.setRef} 
                        data-id={item.id}
                        className="char__item" 
                        onClick={() => {
                            this.props.onCharSelect(item.id)
                            this.focusOnItem(item.id)
                        }}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                this.props.onCharSelect(item.id)
                                this.focusOnItem(item.id)
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

CharList.propTypes = {
    onCharSelect: PropTypes.func
}

CharList.defaultProps = {
    onCharSelect: () => {
        console.log('default behavior')
    }
}


export default CharList;