import { useEffect, useState } from 'react';

const Alert2 = () => {
    const [alertMsg, setAlertMsg] = useState('Expired!');

    const changeAlertMsgHandler = e => setAlertMsg(e.target.value);

    const setAlert = () => {
        setTimeout(() => {
            console.log('Alert expired!');
        }, 2000);
    }

    useEffect(() => {
        // const setAlert = () => {
        //     return setTimeout(() => {
        //         console.log(alertMsg);
        //     }, 2000);
        // }
        setAlert();

        // const timer = setTimeout(() => {
        //     console.log(alertMsg);
        // }, 2000);

        // return () => {
        //     console.log('Cleanup!');
        //     clearTimeout(timer);
        // }
    }, [setAlert]);

    console.log('render...');

    return <input type="text" onChange={changeAlertMsgHandler} />;
}

export default Alert2;
