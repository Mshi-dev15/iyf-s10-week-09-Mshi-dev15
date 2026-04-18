import useLocalStorage from '../hooks/useLocalStorage'
import useToggle from '../hooks/useToggle'

function Home() {
  const [name, setName] = useLocalStorage('username', '')
  const [isVisible, { toggle }] = useToggle(false)

  return (
    <div className="page">
      <h1>Welcome to CommunityHub</h1>

      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <h3>useLocalStorage test</h3>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type your name"
          style={{ marginRight: '8px' }}
        />
        <p style={{ marginTop: '8px' }}>Hello, {name || 'stranger'}!</p>
        <small style={{ color: '#7a6e64' }}>Refresh the page — your name stays!</small>
      </div>

      <div>
        <h3>useToggle test</h3>
        <button onClick={toggle} style={{ marginTop: '8px' }}>
          {isVisible ? 'Hide' : 'Show'} message
        </button>
        {isVisible && <p style={{ marginTop: '12px' }}>Hello! I am toggled on.</p>}
      </div>
    </div>
  )
}

export default Home