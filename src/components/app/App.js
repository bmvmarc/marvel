import AppHeader from "../appHeader/AppHeader";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";


const App = () => {
  
    const showChildrenAndRenderPropsExample = false;

    return (
        <Router>
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
                    
                    <Routes>
                        <Route path='/' element={ <MainPage/> }/>
                        <Route path='/comics' element={ <ComicsPage/> }/>
                        <Route path='/comics/:comicId' element={ <SingleComicPage/> }/>
                        <Route path='*' element={ <Page404/> }/>
                    </Routes>

                </main>
            </div>
        </Router>
    )
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
const Counter = (props) => {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter => counter + 1)       
    }

    return (
        <div style={{display: 'flex'}}>
            <button onClick={increase}>inc</button>
            {props.render(counter)}
        </div>
    )
}

export default App;