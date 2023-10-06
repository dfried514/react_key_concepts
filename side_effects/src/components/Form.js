import { useState } from "react";

import Error from './Error';

const Form = () => {
    let [enteredEmail, setEnteredEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const updateEmailHandler = e => {
        setEnteredEmail(e.target.value);
    }
    const submitFormHandler = e => {
        e.preventDefault();
        if (!enteredEmail.endsWith('.com'))
            setErrorMessage('Only email addresses ending with .com are accepted!');
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <label>Email</label>
                <input type="text" onChange={updateEmailHandler} />
            </div>
            {errorMessage && <Error message={errorMessage} />}
            <button>Submit</button>
        </form>
    );
}

export default Form;
