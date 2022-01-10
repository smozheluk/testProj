import React from 'react';
import './App.css';
import {LessonUseMemo} from "./components/LessonUseMemo/LessonUseMemo";
import {LessonUseEffect} from "./components/LessonUseEffect/LessonUseEffect";
import {Clock} from "./components/LessonUseEffect/Clock";

function App() {
    return (
        <div className="App">
            <LessonUseMemo/>
            <hr/>
            <LessonUseEffect />
            <hr/>
            <Clock />
        </div>
    );
}

export default App;
