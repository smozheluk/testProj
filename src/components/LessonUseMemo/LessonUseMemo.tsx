import React, {useMemo, useState} from "react";

export const LessonUseMemo = () => {

    const [a, setA] = useState<number>(2)
    const [b, setB] = useState<number>(2)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        let tmpResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                let temp = Math.random()
            }
            tmpResult *= i
        }
        return tmpResult
    },[a])



    for (let i = 1; i <= b; i++) {
        resultB *= i
    }


    return (
        <div>
            <input type="text" value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    )
}