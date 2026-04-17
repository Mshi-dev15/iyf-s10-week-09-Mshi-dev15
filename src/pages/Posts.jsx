import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { LoadingSpinner, ErrorMessage } from '../components/shared/Feedback'

function Posts() {
  const navigate = useNavigate()
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  if (loading) return <LoadingSpinner text="Loading posts..." />
  if (error)   return <ErrorMessage message={error} onRetry={() => window.location.reload()} />

  return (
    <div>
      <h1>Posts</h1>
      {posts.slice(0, 10).map(post => (
        <div
          key={post.id}
          onClick={() => navigate(`/posts/${post.id}`)}
          style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '12px', borderRadius: '8px', cursor: 'pointer' }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts