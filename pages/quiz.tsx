import React from 'react'
import Question from '@/components/Quiz/Question'
import { useRouter } from 'next/router'
import questionList from '@/questions'

interface QuizProps {
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    currentQuestionIndex: number,
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>
}

const questions = questionList

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