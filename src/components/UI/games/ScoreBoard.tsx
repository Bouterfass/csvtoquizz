import style from '../../../styles/ScoreBoard.module.css'

interface ScoreProps {
    word: string
    translation: string
    points: number
}

interface ScoreBoardProps {
    score: ScoreProps[]
}


const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {


    let total: number = score.reduce((acc, curr) => acc + curr.points, 0);
    let foundWords: number = score.length
    

    return <div className="flex flex-col w-1/2 h-full shadow-lg bg-lightGrayL dark:bg-blackL mr-4 rounded-lg p-4">
        <header className="flex-none font-bold p-1 rounded-lg bg-gray-200 dark:bg-black border-2 border-lightGrayD dark:border-blackDk flex justify-center items-center">
            <span className='text-lg text-lightWhite'>Mots trouvés: {foundWords} (<span className="text-validation">{total}</span>pts) </span>
        </header>
        <div className={`flex bg-darkWhite flex-col-reverse dark:border-2
            items-center pb-1 flex-1 h-full w-full border-2 border-solid dark:border-darkGray
          dark:bg-black rounded-lg mt-2 overflow-y-auto ${style['scrollbar-hide']}`}>
            {score && score.map((s, index) => {
                return (
                    <div className="flex justify-between flex-row p-2 w-[98%] font-bold text-sm
                        rounded-md bg-gray-200 mt-1 border border-lightGrayD text-blackL dark:bg-darkGray dark:text-black
                        " key={index}>
                        <div>
                            <span>{s.word}</span>
                            <span> ↔ </span>
                            <span>{s.translation}</span>
                        </div>
                        <div>
                            <span className="text-validation">+{s.points}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>


}

export default ScoreBoard