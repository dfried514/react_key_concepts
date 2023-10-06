import { useEffect } from "react";

const Error = ({ message }) => {
    useEffect(() => {
        console.log('An error has occurred!');
        console.log(message);
    },
    [message]);

    return <p>{message}</p>
};

export default Error;
