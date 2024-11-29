

const ScoreBoard = () => {

    return <div className="h-4/5 w-full flex justify-end">
        <div className="flex flex-col w-1/2 h-full bg-blackL mr-4 rounded-lg p-4">
            <header className="flex-none p-1 rounded-lg bg-black flex justify-center items-center">
                <span className="text-lg text-lightGrayL">points: </span>
            </header>
            <div className="flex-1 w-full bg-black rounded-lg mt-2">

            </div>
        </div>
    </div>

}

export default ScoreBoard