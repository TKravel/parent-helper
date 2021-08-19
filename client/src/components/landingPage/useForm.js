import { useState, useEffect } from 'react';

function useForm(test, validate){
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          test();
        }
      }, [errors]);

    function handleChange(e){
        const { name, value } = e.target;
        setValues(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }

    function handleSubmit(e){
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        
        
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm;