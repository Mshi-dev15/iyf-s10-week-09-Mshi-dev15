export function LoadingSpinner({ text = 'Loading...' }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <p>{text}</p>
    </div>
  )
}

export function ErrorMessage({ message, onRetry }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <p>⚠️ {message}</p>
      {onRetry && (
        <button onClick={onRetry}>Try Again</button>
      )}
    </div>
  )
}