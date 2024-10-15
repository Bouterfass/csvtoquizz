import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scoreCalculation } from '../utils/scoreCalculation';
import CountUp from 'react-countup';
import { Button } from '@headlessui/react';
import ListItem from '../components/UI/ListItem';


const Save = () => {

    let location = useLocation();
    const navigate = useNavigate();

    let score = location.state.score;
    let data = location.state.data;
    let result = scoreCalculation(score);

    console.table("score: ", score);
    

    console.log(`result: ${result}%`);

    const handleRetry = () => navigate(`/test/${data.length}`, { state: { key: data } })
    const handleHome = () => navigate('/');

    return (
        <div className='flex flex-col'>
            <CountUp end={result} duration={3} />
            {score.map((q: any, i: number) => {
                return (<div key={i}>
                    <ListItem score={q} />
                </div>
                )
            })}
            <Button
                className="w-32 rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                onClick={handleRetry}
            >retry
            </Button>
            <Button
                className="w-32 rounded bg-midnight py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                onClick={handleHome}
            >back to home
            </Button>
        </div>
    )

}

export default Save;