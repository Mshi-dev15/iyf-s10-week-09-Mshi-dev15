import { Outlet, NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function Layout() {
  const { user, logout } = useAuth()

  return (
    <div>
      <header style={{ background: '#1a1410', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', gap: '24px', borderBottom: '3px solid #c84b2f' }}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>CommunityHub</span>

        <nav style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Home</NavLink>
          <NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Posts</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>About</NavLink>
          <NavLink to="/timer" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Timer</NavLink>
          <NavLink to="/search" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Search</NavLink>
          <NavLink to="/tabs" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Tabs</NavLink>

          {user ? (
            <>
              <NavLink to="/create" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>+ Post</NavLink>
              <span style={{ color: '#e8654a' }}>{user.username}</span>
              <button onClick={logout} style={{ background: 'transparent', border: '1px solid #ddd5c8', color: 'white', padding: '4px 12px', fontSize: '0.8rem' }}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#e8654a' : 'white', textDecoration: 'none' })}>Login</NavLink>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout