import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import Timer from './daily-challenges/Day1-Timer'
import Search from './daily-challenges/Day2-Search'
import Day3Tabs from './daily-challenges/Day3-Tabs'
import Login from './daily-challenges/Day4-Login'
import UserProfile from './daily-challenges/Day5-UserProfile'
import ProtectedRoute from './components/shared/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="timer" element={<Timer />} />
        <Route path="search" element={<Search />} />
        <Route path="tabs" element={<Day3Tabs />} />
        <Route path="login" element={<Login />} />
        <Route path="profile/:userId" element={<UserProfile />} />
        <Route path="create" element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  )
}

export default App