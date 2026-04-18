import { useState } from 'react'

function useForm(initialValues, validate) {
  const [values,  setValues]  = useState(initialValues)
  const [errors,  setErrors]  = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    if (validate) {
      setErrors(validate(values))
    }
  }

  const validateAll = () => {
    const allTouched = Object.keys(initialValues).reduce(
      (acc, key) => ({ ...acc, [key]: true }), {}
    )
    setTouched(allTouched)
    if (validate) {
      const errs = validate(values)
      setErrors(errs)
      return Object.keys(errs).length === 0
    }
    return true
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return { values, errors, touched, handleChange, handleBlur, validateAll, reset }
}

export default useForm