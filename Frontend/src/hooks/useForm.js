import { useEffect, useMemo, useState } from 'react'

export const useForm = ( initialForm = {}, formValidations = {} ) => {

  const [ formValues, setFormValues ] = useState( initialForm )
  const [ formValidation, setFormValidation ] = useState({})

  useEffect(() => {
    createValidators();
  }, [ formValues ])

  useEffect(() => {
    setFormValues( initialForm );
  }, [ initialForm ])

  const isFormValid = useMemo( () => {

    for (const formValue of Object.keys( formValidation )) {
      if ( formValidation[formValue] !== null ) return false;
    }

    return true;
  }, [ formValidation ])

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

  const onResetForm = () => {
    setFormValues( initialForm );
  }

  const createValidators = () => {
        
    const formCheckedValues = {};
    
    for (const formField of Object.keys( formValidations )) {
      const [ fn, errorMessage ] = formValidations[formField];

      formCheckedValues[`${ formField }Valid`] = fn( formValues[formField] ) ? null : errorMessage;
    }

    setFormValidation( formCheckedValues );
  }

  return{
    formValues,
    setFormValues,
    ...formValues,
    onInputChange,
    onDateChanged,
    onResetForm,
    ...formValidation,
    isFormValid
  }
}
