import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="create" element={<CreatePost />} />
      </Route>
    </Routes>
  )
}

export default App