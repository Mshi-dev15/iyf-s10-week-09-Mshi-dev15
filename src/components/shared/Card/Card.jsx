function Card({ children, footer, onClick }) {
  return (
    <div
      className="card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
      {footer && (
        <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #ddd5c8' }}>
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card