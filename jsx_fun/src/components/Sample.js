import { useState } from "react";

const Sample = () => {
    const [text, setText] = useState('Initial Text');

    const handleClick = () => {
        console.log(this);
        setText('Textra was changed!');
    }

    return (
        <>
            <button onClick={handleClick}>Click to change text</button>
            <p>{text}</p>
        </>
    )
}

export default Sample;
