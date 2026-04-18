import { useState, useEffect } from 'react'

function Timer() {
  const [elapsed,   setElapsed]   = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setElapsed(prev => prev + 1)
    }, 1000)

    // Cleanup: stops the interval when isRunning becomes false
    return () => clearInterval(interval)

  }, [isRunning])

  const format = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0')
    const s = String(secs % 60).padStart(2, '0')
    return `${m}:${s}`
  }

  const handleReset = () => {
    setIsRunning(false)
    setElapsed(0)
  }

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>Timer</h1>
      <p style={{ color: '#7a6e64', marginBottom: '32px' }}>Daily Challenge Day 1</p>

      <div style={{ fontSize: '5rem', fontWeight: 'bold', color: isRunning ? '#c84b2f' : '#1a1410', marginBottom: '32px' }}>
        {format(elapsed)}
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button onClick={() => setIsRunning(r => !r)}>
          {isRunning ? 'Pause' : elapsed > 0 ? 'Resume' : 'Start'}
        </button>
        <button onClick={handleReset} style={{ background: '#ddd5c8', color: '#1a1410' }}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer