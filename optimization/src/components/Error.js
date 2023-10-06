import { memo } from "react";

const Error = ({ message, clearErrorHandler }) => {
    console.log('<Error /> component function is executed.');

    if (!message) return null;

    return (
        <div>
            <p>{message}</p>
            <button onClick={clearErrorHandler}>X</button>
        </div>
    );
}

export default memo(Error);
