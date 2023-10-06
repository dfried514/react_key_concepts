import { useState, useEffect } from 'react';

const Alert = () => {
    const [alertDone, setAlertDone] = useState(false);

    useEffect(() => {
        let timer;

        console.log('Starting Alert Timer');
        timer = setTimeout(() => {
            console.log('Timer expired!');
            setAlertDone(true);
        }, 2000);

        return () => {
            console.log('Cleanup!');
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {!alertDone && <p>Relax, you still got some time!</p>}
            {alertDone && <p>Time to get up!</p>}
        </>
    )
}

export default Alert;
