import { useState } from "react";

const Batch = () => {
    console.log('<Batch /> is called.');

    const [counter, setCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(false);

    const incCounterHandler = () => {
        setCounter(prevCounter => prevCounter + 1);
        if (!showCounter)
            setShowCounter(true);
    }

    return (
        <>
            <p>Click to increment + show or hide the counter</p>
            <button onClick={incCounterHandler}>increment</button>
            {showCounter && <p>Counter: {counter}</p>}
        </>
    );
}

export default Batch;
