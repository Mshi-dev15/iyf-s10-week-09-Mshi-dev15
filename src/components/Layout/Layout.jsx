import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header style={{ background: '#1a1410', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', gap: '24px', borderBottom: '3px solid #c84b2f' }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>CommunityHub</span>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <NavLink to="/create" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>+ Post</NavLink>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Home</NavLink>
          <NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Posts</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout