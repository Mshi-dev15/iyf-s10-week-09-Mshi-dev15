function Button({
  children,
  variant  = 'primary',
  size     = 'medium',
  loading  = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button'
}) {
  const baseStyle = {
    border: 'none',
    borderRadius: '4px',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'inherit',
    fontWeight: '600',
    transition: 'background 0.15s',
  }

  const sizes = {
    small:  { padding: '5px 12px', fontSize: '0.8rem' },
    medium: { padding: '8px 18px', fontSize: '0.9rem' },
    large:  { padding: '12px 28px', fontSize: '1rem' },
  }

  const variants = {
    primary:   { background: '#c84b2f', color: 'white' },
    secondary: { background: '#ddd5c8', color: '#1a1410' },
    danger:    { background: '#dc2626', color: 'white' },
    ghost:     { background: 'transparent', color: '#7a6e64', border: '1px solid #ddd5c8' },
  }

  const style = { ...baseStyle, ...sizes[size], ...variants[variant] }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button