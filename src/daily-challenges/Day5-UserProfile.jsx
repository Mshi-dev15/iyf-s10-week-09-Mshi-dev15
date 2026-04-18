import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '2px solid #ddd5c8', marginBottom: '24px' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(i)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: i === activeIndex ? '2px solid #c84b2f' : '2px solid transparent',
              marginBottom: '-2px',
              padding: '10px 20px',
              fontWeight: '600',
              fontSize: '0.9rem',
              color: i === activeIndex ? '#c84b2f' : '#7a6e64',
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex].content}</div>
    </div>
  )
}

import { useState } from 'react'

function UserProfile() {
  const { userId } = useParams()
  const navigate = useNavigate()

  const { data: user,  loading: userLoading,  error: userError  } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const { data: posts, loading: postsLoading                     } = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  const { data: todos, loading: todosLoading                     } = useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)

  if (userLoading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading profile...</div>
  if (userError)   return <div style={{ padding: '40px', textAlign: 'center' }}>Error: {userError}</div>
  if (!user)       return null

  const tabs = [
    {
      label: `Posts (${posts ? posts.length : '...'})`,
      content: postsLoading ? <p>Loading posts...</p> : (
        <div>
          {posts && posts.map(post => (
            <div key={post.id} className="card" onClick={() => navigate(`/posts/${post.id}`)}>
              <h3>{post.title}</h3>
              <p style={{ color: '#7a6e64', marginTop: '8px', fontSize: '0.875rem' }}>{post.body}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      label: `Todos (${todos ? todos.length : '...'})`,
      content: todosLoading ? <p>Loading todos...</p> : (
        <div>
          {todos && todos.map(todo => (
            <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: todo.completed ? '#f0fdf4' : '#faf8f4', border: '1px solid #ddd5c8', borderRadius: '4px', marginBottom: '8px', opacity: todo.completed ? 0.7 : 1 }}>
              <span>{todo.completed ? '✅' : '⬜'}</span>
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', fontSize: '0.9rem' }}>{todo.title}</span>
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <div style={{ padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* User info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#c84b2f', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 'bold' }}>
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 style={{ marginBottom: '4px' }}>{user.name}</h1>
          <p style={{ color: '#7a6e64', fontSize: '0.9rem' }}>{user.email}</p>
          <p style={{ color: '#c84b2f', fontSize: '0.85rem', fontWeight: '600' }}>{user.company.name}</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '32px', marginBottom: '40px' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c84b2f' }}>{posts ? posts.length : '...'}</div>
          <div style={{ fontSize: '0.8rem', color: '#7a6e64', textTransform: 'uppercase' }}>Posts</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c84b2f' }}>{todos ? todos.filter(t => t.completed).length : '...'}</div>
          <div style={{ fontSize: '0.8rem', color: '#7a6e64', textTransform: 'uppercase' }}>Todos done</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c84b2f' }}>{todos ? todos.filter(t => !t.completed).length : '...'}</div>
          <div style={{ fontSize: '0.8rem', color: '#7a6e64', textTransform: 'uppercase' }}>Remaining</div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} />
    </div>
  )
}

export default UserProfile