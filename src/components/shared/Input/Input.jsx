function Input({
  label,
  error,
  type        = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  required    = false,
  rows,
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label
          htmlFor={name}
          style={{ display: 'block', fontWeight: '600', fontSize: '0.85rem', marginBottom: '6px' }}
        >
          {label}
          {required && <span style={{ color: '#c84b2f', marginLeft: '2px' }}>*</span>}
        </label>
      )}

      {rows ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          style={{
            width: '100%',
            padding: '10px 14px',
            border: `2px solid ${error ? '#dc2626' : '#ddd5c8'}`,
            borderRadius: '4px',
            fontSize: '0.95rem',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical',
          }}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '10px 14px',
            border: `2px solid ${error ? '#dc2626' : '#ddd5c8'}`,
            borderRadius: '4px',
            fontSize: '0.95rem',
            outline: 'none',
          }}
        />
      )}

      {error && (
        <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '4px' }}>{error}</p>
      )}
    </div>
  )
}

export default Input