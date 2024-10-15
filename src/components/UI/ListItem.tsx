import React from "react";

interface ScoreProps {
    correct: Boolean;
    question: string;
    answer: string;
    user_answer: string;
}

interface ListItemProps {
    score: ScoreProps;
}

const ListItem = ({ score }: ListItemProps) => {

    const { correct, question, answer, user_answer } = score;

    return (<div>
        
    </div>)

}



export default ListItem;