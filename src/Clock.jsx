import { useEffect, useState } from "react";

function Clock(props)
{
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // useEffect implementation to execute code when the component loads
        // Set date value in state every second to current date and time
        // Save setInterval timerId in a variable for teardown later in the useEffect method
        const timerId = setInterval(() => {
        setDate(new Date());
        }, 1000);

        // useEffect implemenation to tear down the interval saved in timerId
        return () => {
            // Teardown setInterval timer saved within the timerId variable
            clearInterval(timerId);
        };
    });

    return (
        <p>
            {date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })};
        </p>
    );
}

export default Clock;