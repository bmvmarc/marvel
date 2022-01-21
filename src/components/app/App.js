import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import React, { Component } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

class App extends Component {

    state = {
        selectedChar: null        
    }    

    onCharSelect = (selectedChar) => {
        console.log(selectedChar);
        this.setState({
            selectedChar
        });
    }

    render () {

        const showChildrenAndRenderPropsExample = false;

        return (
            <div className="app">
                { showChildrenAndRenderPropsExample ? 
                    <>
                        <Fields
                            left = {
                                <DynamicGreeting color={'primary'}>
                                    <h2>jopa</h2>
                                    <h3>lunatic asylum</h3>
                                </DynamicGreeting>                        
                            }

                            right = {
                                <><h4> The right field </h4>
                                </>
                            }
                        />
                        <Counter render = {counter => <h6> count: {counter}</h6>}/>
                        <Counter render = {counter => <div> another count: {counter}</div>}/>
                    </>
                : null
                }

                <AppHeader/>
                <main>
                    <ErrorBoundary><RandomChar/></ErrorBoundary>                    
                    <div className="char__content">

                        <ErrorBoundary>
                            <CharList onCharSelect={this.onCharSelect}/>
                        </ErrorBoundary>
                        <ErrorBoundary><CharInfo selectedChar={this.state.selectedChar}/></ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

const DynamicGreeting = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {style: {color: 'red'}})
                })
            }
        </div>
    )
}
const Fields = (props) => {
    return (
        <div style = {{display: 'flex', background: 'beige'}}>
            <div style = {{flex: 'left'}}>
                {props.left}
            </div>
            <div style = {{flex: 'right'}}>
                {props.right}
            </div>

        </div>
    )
}
class Counter extends Component {
    state = {
        counter: 0
    }

    increase = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }))
        
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <button onClick={this.increase}>inc</button>

                {this.props.render(this.state.counter)}

            </div>
        )
    }
}

export default App;