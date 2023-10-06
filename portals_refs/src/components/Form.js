import { useState, useRef } from "react";

const Form = () => {
    const lastNameRef = useRef();
    const counter = useRef(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const updateFirstName = event => setFirstName(event.target.value);
    const updateLastName = event => setLastName(event.target.value);

    const reset = () => {
        setFirstName('');
        setLastName('');
    }

    const formHandler = event => {
        event.preventDefault();
        setFullName(`${firstName} ${lastName}`);
        counter.current++;
        console.log("last last Name:  ", lastNameRef.current.value);
        reset();
        lastNameRef.current.focus();
    }

    return (
        <div>
            <form onSubmit={formHandler} >
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={firstName} onChange={updateFirstName} />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <input ref={lastNameRef} type="text" value= {lastName} onChange={updateLastName} />
                <br />
                <button>Submit</button>
            </form> 
            <>{fullName}</>
            <br />
            <>counter:{counter.current}</>
        </div>
    );
}

export default Form;
