import React from 'react'

export interface QuestionFormat {
    question: string;
    options: string[];
    answer: string;
}

interface QuestionProps {
    question: string;
    options: string[];
    answer: string;
    clickFunction: (correct: boolean) => void
}

const Question = ({ question, options, answer, clickFunction }: QuestionProps) => {
    return (
        <div className='flex flex-col space-y-10 w-full'>
            <div className='text-2xl text-center capitalize font-semibold'>{question}</div>
            <div className='flex flex-row space-x-4 w-1/2 mx-auto'>
                {options.map((option, index) => {
                    return (
                        <Option key={index} answer={option} correct={option === answer} clickFunction={clickFunction} />
                    )
                })}
            </div>
            {/* <div>{answer}</div> */}
        </div>
    )
}

export const Option = ({ answer, correct, clickFunction }: { answer: string, correct: boolean, clickFunction: (correct: boolean) => void }) => {
    return (
        <button onClick={() => { clickFunction(correct) }} className='py-2 hover:cursor-pointer bg-blue-500 hover:bg-blue-700 w-full text-white font-bold px-4 rounded'>
            {answer}
        </button>
    )
}


export default Question