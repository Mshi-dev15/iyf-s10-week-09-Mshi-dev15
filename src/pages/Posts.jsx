import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { LoadingSpinner, ErrorMessage } from '../components/shared/Feedback'
import Card from '../components/shared/Card/Card'

function Posts() {
  const navigate = useNavigate()
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  if (loading) return <LoadingSpinner text="Loading posts..." />
  if (error)   return <ErrorMessage message={error} onRetry={() => window.location.reload()} />

  return (
    <div className="page">
      <h1 style={{ marginBottom: '24px' }}>Posts</h1>
      {posts.slice(0, 10).map(post => (
        <Card key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
          <h3>{post.title}</h3>
          <p style={{ color: '#7a6e64', marginTop: '8px' }}>{post.body}</p>
        </Card>
      ))}
    </div>
  )
}

export default Posts