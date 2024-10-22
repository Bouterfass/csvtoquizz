import Section from "../components/UI/Section";
import BigTitle from "../components/UI/BigTitle";

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
            file: "english_bd_easy.json",
            level: "easy",
            language: "english",
            stats: nbOfQuestions("english_bd_easy.json")
        },
        {
            file: "english_bd_med.json",
            level: "medium",
            language: "english",
            stats: nbOfQuestions("english_bd_med.json")
        },
        {
            file: "english_bd_hard.json",
            level: "medium",
            language: "english",
            stats: nbOfQuestions("english_bd_hard.json")
        }
    ]


    return <Section>
        <BigTitle>Training page</BigTitle>
        <div className="mt-[5rem] bg-test w-1/3 h-[400px]">
            {available_quizz[0].stats}
        </div>
    </Section>
}

export default Train;