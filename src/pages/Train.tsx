import Section from "../components/UI/Section";
import BigTitle from "../components/UI/BigTitle";
import Card from "../components/UI/Card";

interface QuizzProps {
    filename: string;
    title: string;
    language: string;
    level: string;
    stats: number | undefined;
}


const Train = () => {

    const nbOfQuestions = (file: string) => {
        try {
            let data = require(`../data/${file}`);
            if (Array.isArray(data))
                return data.length;
            else
                return Object.keys(data).length
        } catch (error) {
            console.error(error)
            return undefined;
        }
    }

    const available_quizz = [
        {
            filename: "english_bd_easy.json",
            title: "body parts",
            level: "easy",
            language: "english",
            stats: nbOfQuestions("english_bd_easy.json")
        },
        {
            filename: "english_bd_med.json",
            title: "body parts",
            level: "medium",
            language: "english",
            stats: nbOfQuestions("english_bd_med.json")
        },
        {
            filename: "english_bd_hard.json",
            title: "body parts",
            level: "medium",
            language: "english",
            stats: nbOfQuestions("english_bd_hard.json")
        }
    ]


    return <Section>
        <BigTitle>Training page</BigTitle>
        <div className="mt-[5rem] w-1/3 h-[400px]">
            <div className="">
                {available_quizz.map((q, index) => {
                    return <Card<QuizzProps> data={q} key={index}>
                        <h2>{q.language}</h2>
                        <p>Level: {q.level}</p>
                        <p>Number of questions: {q.stats}</p>
                    </Card>;
                })}
            </div>
        </div>
    </Section>
}

export default Train;