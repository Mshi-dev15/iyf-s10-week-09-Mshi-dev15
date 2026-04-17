import { useState, useEffect } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  // Effect 1: runs after EVERY render
  useEffect(() => {
    console.log('Effect ran! Count is:', count)
  })

  // Effect 2: runs ONCE on mount
  useEffect(() => {
    console.log('Component mounted!')
  }, [])

  // Effect 3: runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  // Effect 4: cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick')
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log('Cleaned up!')
    }
  }, [])

  return (
    <div>
      <h1>Welcome to CommunityHub</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Home