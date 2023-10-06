import { useState, useCallback } from "react"
import Error from './Error';

const Form = () => {
    console.log('<Form /> is executed.');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const updateEmailHandler = e => setEnteredEmail(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        if (!enteredEmail.endsWith('.com')) 
            setErrorMessage('Email must end with .com.');
    }

    const clearErrorHandler = useCallback(() => {
        setErrorMessage(null);
    }, []);

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={enteredEmail}
                    onChange={updateEmailHandler}
                />
            </div>
            <Error message={errorMessage} clearErrorHandler={clearErrorHandler} />
            <button>Sign Up</button>
        </form>
    );
}

export default Form;
