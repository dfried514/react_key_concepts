import { useState } from "react";
import { add, differenceInDays, format, parseISO } from 'date-fns';

const initialStartDate = new Date();
const initialEndDate = add(initialStartDate, { days: 1});

const DateCalculator = () => {
    const [startDate, setStartDate] = useState(
        format(initialStartDate, 'yyyy-MM-dd')
    );

    const [endDate, setEndDate] = useState(
        format(initialEndDate, 'yyyy-MM-dd')
    );

    const daysDiff = differenceInDays(parseISO(endDate), parseISO(startDate));

    const updateStartDateHandler = e => setStartDate(e.target.value);

    const updateEndDateHandler = e => setEndDate(e.target.value);

    return (
        <div>
            <p>Calculate the difference (in days) between two dates.</p>
            <div>
                <label htmlFor="start">Start Date</label>
                <input 
                    id="start"
                    type="date"
                    value={startDate}
                    onChange={updateStartDateHandler}
                />
            </div>
            <div>
                <label htmlFor="end">Start Date</label>
                <input 
                    id="end"
                    type="date"
                    value={endDate}
                    onChange={updateEndDateHandler}
                />
            </div>
            <p>Difference:  {daysDiff} days</p>
        </div>
    );
}

export default DateCalculator;
