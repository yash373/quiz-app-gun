import React from 'react'
import Link from 'next/link';

const Result = ({ score, totalQuestions }: { score: number, totalQuestions: number }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Quiz Results</h1>
      <p className="text-xl">You scored {score} out of {totalQuestions}</p>
      <p className="text-lg">Percentage: {percentage.toFixed(2)}%</p>
      <Link href="/" className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retake Quiz
        </button>
      </Link>
    </div>
  );
}

export default Result;
