import { lazy, Suspense, useState } from "react";

const DateCalculator = lazy(() => import('./DateCalculator'));

const ShowDateCalculator = () => {
    const [showDateCalc, setShowDateCalc] = useState(false);

    const openDateCalcHandler = () => setShowDateCalc(true);

    return (
        <>
            <p>This app might be doing all kinds of things.</p>
            <p>
                But you can also open a calculator which calculates the difference
                between two dates.
            </p>
            <button onClick={openDateCalcHandler}>Open Calculator</button>
            <Suspense fallback={<p>Loading...</p>}>
                {showDateCalc && <DateCalculator />}
            </Suspense>
        </>
    );
}

export default ShowDateCalculator;
