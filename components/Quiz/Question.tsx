import React from 'react'

export interface QuestionFormat {
    question: string;
    options: string[];
    answer: string;
}

const Question = ({question, options, answer}:QuestionFormat) => {
  return (
    <div>Question</div>
  )
}

export const Option = () => {
  return (
    <div>Question</div>
  )
}


export default Question