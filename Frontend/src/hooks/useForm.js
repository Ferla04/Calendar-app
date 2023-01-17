import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

  const [ formValues, setFormValues ] = useState( initialState )

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChanged = ( event, chaning ) => {
    setFormValues({
      ...formValues,
      [chaning]: event
    })
  }

  return{
    formValues,
    setFormValues,
    ...formValues,
    onInputChange,
    onDateChanged,
  }
}
