import React from 'react';
import './App.css';
import {LessonUseMemo} from "./components/LessonUseMemo/LessonUseMemo";
import {LessonUseEffect} from "./components/LessonUseEffect/LessonUseEffect";
import {Clock} from "./components/LessonUseEffect/Clock";
import {Tests} from "./components/Tests/Tests";

function App() {
    return (
        <div className="App">
            {/*<LessonUseMemo/>
            <hr/>
            <LessonUseEffect/>
            <hr/>
            <Clock/>
            <hr/>*/}
            <Tests/>
        </div>
    );
}

export default App;
