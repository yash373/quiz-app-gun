import React from 'react'
import GunAnimation from '@/components/Quiz/GunAnimation'
import Question from '@/components/Quiz/Question'
import { useState } from 'react'
import { QuestionFormat } from '@/components/Quiz/Question'

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


const Quiz = () => {
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    
    return (
        <div className='flex flex-col space-y-10 items-center justify-center h-screen'>
                <Question question={questions[currentQuestionIndex].question} options={questions[currentQuestionIndex].options} answer={questions[currentQuestionIndex].answer} />
                <GunAnimation />
        </div>
    )
}

export default Quiz