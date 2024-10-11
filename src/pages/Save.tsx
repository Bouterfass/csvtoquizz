import React from 'react';
import { useLocation } from 'react-router-dom';
import { scoreCalculation } from '../utils/scoreCalculation';

const Save = () => {

    let location = useLocation();

    let score = location.state.score;
    let result = scoreCalculation(score);

    console.log(`result: ${result}%`);
    

    return (
        <div className='flex flex-col'>
            {score.map((q: any, i: number) => {
                return (<div key={i}>
                    <hr />
                    <span>{q.correct ? "vrai" : "faux"}</span>
                    <span>{q.question}</span>
                    <span>{q.answer}</span>
                </div>)
            })}
        </div>
    )

}

export default Save;