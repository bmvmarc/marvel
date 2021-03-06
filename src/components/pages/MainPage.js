import { useState } from "react";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import RandomChar from "../randomChar/RandomChar";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    
    const [selectedChar, setChar] = useState(null);

    const onCharSelect = (id) => {
        setChar(id)
    }

    return (<>
        
        <ErrorBoundary>
        <RandomChar/>
        </ErrorBoundary>    

        <div className="char__content">

            <ErrorBoundary>
                <CharList onCharSelect={onCharSelect}/>
            </ErrorBoundary>

            <ErrorBoundary>
                <CharInfo selectedChar={selectedChar}/>
            </ErrorBoundary>

        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
        
    </>);
}

export default MainPage;