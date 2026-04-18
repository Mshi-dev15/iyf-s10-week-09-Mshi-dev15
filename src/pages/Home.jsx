import useLocalStorage from '../hooks/useLocalStorage'
import useToggle from '../hooks/useToggle'
import Button from '../components/shared/Button/Button'

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

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '12px' }}>useToggle test</h3>
        <Button onClick={toggle}>
          {isVisible ? 'Hide' : 'Show'} message
        </Button>
        {isVisible && <p style={{ marginTop: '12px' }}>Hello! I am toggled on.</p>}
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Button variants</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  )
}

export default Home