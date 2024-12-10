import React from 'react'
import { useRouter } from 'next/router';

const Result = ({ score, totalQuestions, setScore, setCurrentQuestionIndex }: { score: number, totalQuestions: number, setScore: React.Dispatch<React.SetStateAction<number>>, setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const percentage = (score / totalQuestions) * 100;
    
    const router = useRouter()

    const retakeFunction = () => {
        setScore(0)
        setCurrentQuestionIndex(0)
        router.push("/")
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="text-3xl font-bold">Quiz Results</h1>
            <p className="text-xl">You scored {score} out of {totalQuestions}</p>
            <p className="text-lg">Percentage: {percentage.toFixed(2)}%</p>
            <div className="mt-4">
                <button onClick={retakeFunction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Retake Quiz
                </button>
            </div>
        </div>
    );
}

export default Result;
