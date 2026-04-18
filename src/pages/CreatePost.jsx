import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import Input from '../components/shared/Input/Input'
import Button from '../components/shared/Button/Button'

function validate(values) {
  const errors = {}
  if (!values.title.trim()) errors.title = 'Title is required'
  if (values.title.trim().length < 5) errors.title = 'Title must be at least 5 characters'
  if (!values.body.trim()) errors.body = 'Content is required'
  if (values.body.trim().length < 20) errors.body = 'Content must be at least 20 characters'
  return errors
}

function CreatePost() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [success,    setSuccess]    = useState(false)

  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } =
    useForm({ title: '', body: '' }, validate)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isValid = validateAll()
    if (!isValid) return

    setSubmitting(true)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...values, userId: 1 }),
      })

      const created = await response.json()
      console.log('Created post:', created)

      setSuccess(true)
      reset()
      setTimeout(() => navigate('/posts'), 2000)

    } catch (err) {
      alert('Failed: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page" style={{ maxWidth: '600px' }}>
      <h1 style={{ marginBottom: '8px' }}>Write a Post</h1>
      <p style={{ color: '#7a6e64', marginBottom: '32px' }}>Share your thoughts with the community</p>

      {success && (
        <div style={{ background: '#dcfce7', border: '1px solid #86efac', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', color: '#166534' }}>
          ✅ Post submitted! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Input
          label="Post Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Give your post a clear title"
          error={touched.title && errors.title}
          required
        />

        <Input
          label="Content"
          name="body"
          value={values.body}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Write your post content here..."
          error={touched.body && errors.body}
          rows={6}
          required
        />

        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <Button type="submit" loading={submitting}>
            Publish Post
          </Button>
          <Button type="button" variant="ghost" onClick={() => navigate('/posts')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost