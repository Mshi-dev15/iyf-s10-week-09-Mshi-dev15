import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header style={{ background: '#1a1410', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>CommunityHub</span>
        
        <nav style={{ display: 'flex', gap: '16px' }}>
          <NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white' })}>Posts</NavLink>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white' })}>Home</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white' })}>About</NavLink>
        </nav>
      </header>

      <main style={{ padding: '40px 24px' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout