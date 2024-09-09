'use client'
import { useRouter } from 'next/navigation' // Correct import for Next.js 13+
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home') // Redirect to /home
  }, []) // Ensure useEffect only triggers when router is available

  return (
    <div>Redirecting...</div> // Inform user that redirection is happening
  )
}

export default Home
