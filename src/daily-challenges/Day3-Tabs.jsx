import { useState } from 'react'

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {/* Tab headers */}
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

      {/* Active tab content */}
      <div>
        {tabs[activeIndex].content}
      </div>
    </div>
  )
}

function Day3Tabs() {
  const tabs = [
    {
      label: 'Home',
      content: (
        <div>
          <h3>Home Tab</h3>
          <p style={{ color: '#7a6e64', marginTop: '8px' }}>Welcome to the Home tab content.</p>
        </div>
      )
    },
    {
      label: 'Profile',
      content: (
        <div>
          <h3>Profile Tab</h3>
          <p style={{ color: '#7a6e64', marginTop: '8px' }}>This is the Profile tab content.</p>
        </div>
      )
    },
    {
      label: 'Settings',
      content: (
        <div>
          <h3>Settings Tab</h3>
          <p style={{ color: '#7a6e64', marginTop: '8px' }}>This is the Settings tab content.</p>
        </div>
      )
    },
  ]

  return (
    <div style={{ padding: '40px 24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Tabs Component</h1>
      <p style={{ color: '#7a6e64', marginBottom: '32px' }}>Daily Challenge Day 3</p>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default Day3Tabs