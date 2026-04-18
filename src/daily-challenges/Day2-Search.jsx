import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

function Search() {
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm,  setSearchTerm]  = useState('')

  const { data: users, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  // Debounce: wait 300ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchInput)
    }, 300)

    // Cleanup: cancel previous timer if user types again
    return () => clearTimeout(timer)

  }, [searchInput])

  const filtered = users
    ? users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  return (
    <div style={{ padding: '40px 24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>User Search</h1>
      <p style={{ color: '#7a6e64', marginBottom: '24px' }}>Daily Challenge Day 2</p>

      <input
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        placeholder="Search by name or email..."
        style={{ width: '100%', padding: '10px 14px', border: '2px solid #ddd5c8', borderRadius: '4px', fontSize: '0.95rem', marginBottom: '24px' }}
      />

      {loading && <p>Loading users...</p>}

      <p style={{ color: '#7a6e64', fontSize: '0.85rem', marginBottom: '16px' }}>
        {filtered.length} user{filtered.length !== 1 ? 's' : ''} found
      </p>

      {filtered.map(user => (
        <div key={user.id} className="card">
          <h3>{user.name}</h3>
          <p style={{ color: '#7a6e64', fontSize: '0.875rem' }}>{user.email}</p>
          <p style={{ color: '#7a6e64', fontSize: '0.875rem' }}>{user.company.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Search