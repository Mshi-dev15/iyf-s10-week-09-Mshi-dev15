import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function PostDetail() {
  const { postId } = useParams()
  const navigate = useNavigate()

  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )

  if (loading) return <p>Loading...</p>
  if (error)   return <p>Error: {error}</p>

  return (
    <div>
      <button onClick={() => navigate('/posts')}>← Back to Posts</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail