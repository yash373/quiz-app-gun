import React from 'react'
import Heading from '@/components/Page/Heading'
import StartButton from '@/components/Page/StartButton'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  
  const onClick = () => {
    router.push("/quiz")
  }

  return (
    <div className='flex flex-col space-y-10 items-center justify-center h-screen'>
      <Heading />
      <StartButton onClick={onClick} />
    </div>
  )
}

export default Index