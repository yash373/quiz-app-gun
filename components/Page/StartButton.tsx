import React from 'react'

interface Props {
    onClick: () => void,
}

const StartButton = ({onClick}:Props) => {
    return (
        <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onClick}>Start Quiz</div>
    )
}

export default StartButton