import React from 'react'
import Question from '@/components/Quiz/Question'
import { useState } from 'react'
import { QuestionFormat } from '@/components/Quiz/Question'
import { useRouter } from 'next/router'

const questions: QuestionFormat[] = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        answer: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
        answer: 'Jupiter',
    },
    {
        question: 'What is the process by which plants make their own food?',
        options: ['Respiration', 'Photosynthesis', 'Decomposition', 'Fermentation'],
        answer: 'Photosynthesis',
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Ag', 'Au', 'Hg', 'Pb'],
        answer: 'Au',
    },
    {
        question: 'What is the smallest country in the world?',
        options: ['Vatican City', 'Monaco', 'Nauru', 'Tuvalu'],
        answer: 'Vatican City',
    },
    {
        question: 'What is the largest living species of lizard?',
        options: ['Komodo dragon', 'Saltwater crocodile', 'Black mamba', 'African elephant'],
        answer: 'Komodo dragon',
    },
]


interface QuizProps {
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    currentQuestionIndex: number,
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>
}

const Quiz = ({ score, setScore, currentQuestionIndex, setCurrentQuestionIndex }: QuizProps) => {
    const router = useRouter()
    
    const clickFunction = (correct: boolean) => {
        if (correct) {
            setScore(score + 1)
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }else{
            router.push("/result")
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
                <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} answer={questions[currentQuestionIndex].answer} clickFunction={clickFunction} />
        </div>
    )
}

export default Quiz