import React from 'react'

export const useForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = React.useState(initialForm);
    const [formValidation, setFormValidation] = React.useState({});

    React.useEffect(() => {
        validateForm();
        // eslint-disable-next-line
    }, [formState]);

    React.useEffect(() => {
        setFormState(initialForm);
        // eslint-disable-next-line
    }, [initialForm]);


    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const handleReset = () => {
        setFormState(initialForm);
    }

    const validateForm = () => {
        const formCheckedValues = {};

        for (const field in formValidations) {
            const [fn, errorMessage = 'Invalid field'] = formValidations[field];
            formCheckedValues[`${field}Valid`] = fn(formState[field]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    };

    const isFormValid = React.useMemo(() => {
        return Object.values(formValidation).every(value => value === null);
    }, [formValidation]);

    return { 
        ...formState,
        formState, 
        handleInputChange,
        handleReset,
        ...formValidation,
        isFormValid
    };
}
