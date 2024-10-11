import React from 'react';
import { useLocation } from 'react-router-dom';


const Save = () => {

    let location = useLocation();

    let score = location.state.score;

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