//React component for real time rendering of the time
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const axios = require('axios');


//Api endpoint /api/v1/time/timezone/:timezone <- use the client timezone


//Get client timezone string
function getTimezone() {
    let date = new Date();
    let timezone = date.toString().split("(")[1].split(")")[0];
    return timezone;
}


function Time() {
    const router = useRouter();
    const [time, setTime] = useState('');

    //With  setInterval, the time is updated every second
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`/api/v1/time/timezone/${getTimezone()}`)
            .then(res => {
                setTime(res.data.time);
            }
            )
            .catch(err => {
                console.log(err);
            }
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);
}

export default Time;