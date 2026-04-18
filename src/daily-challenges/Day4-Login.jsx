import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Login() {
  const { user, login, logout } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim()) { setError('Please enter a username'); return }
    if (username.trim().length < 2) { setError('At least 2 characters'); return }
    login(username.trim())
    navigate('/')
  }

  if (user) {
    return (
      <div style={{ padding: '40px 24px', maxWidth: '400px', margin: '0 auto' }}>
        <h1>You are logged in!</h1>
        <p style={{ color: '#7a6e64', margin: '12px 0 24px' }}>
          Signed in as <strong>{user.username}</strong>
        </p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px 24px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login</h1>
      <p style={{ color: '#7a6e64', margin: '12px 0 24px' }}>Daily Challenge Day 4</p>

      <form onSubmit={handleSubmit} noValidate>
        <input
          value={username}
          onChange={e => { setUsername(e.target.value); setError('') }}
          placeholder="Enter your username"
          style={{ width: '100%', padding: '10px 14px', border: `2px solid ${error ? '#dc2626' : '#ddd5c8'}`, borderRadius: '4px', fontSize: '0.95rem', marginBottom: '8px' }}
        />
        {error && <p style={{ color: '#dc2626', fontSize: '0.8rem', marginBottom: '8px' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', marginTop: '8px' }}>Sign In</button>
      </form>
    </div>
  )
}

export default Login