import { useState, useEffect, useCallback } from 'react';

const Alert3 = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const updateEmailHandler = e => setEnteredEmail(e.target.value);
    const updatePasswordHandler = e => setEnteredPassword(e.target.value);

    const validateEmail = useCallback(() => {
        if (!enteredEmail.includes('@'))
            console.log('Invalid email');
    }, [enteredEmail]);

    console.log('render');

    useEffect(() => {
        validateEmail();
    }, [validateEmail]);

    return (
        <form>
            <div>
                <label>Email</label>
                <input type="email" onChange={updateEmailHandler} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={updatePasswordHandler} />
            </div>
            <button>Save</button>
        </form>
    );
}

export default Alert3;
