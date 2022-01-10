import React, {useEffect, useState} from "react";

export const LessonUseEffect = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(()=>{
        setInterval(()=>{
            console.log('tick')
            setCounter((state) => state+1)
        }, 1000)
    },[])

    return (
        <div>
            Hello, counter: {counter}  -  fake: {fake}
        </div>
    )
}