/*
Return the current time:

endpoint: /api/v1/time/timezone/[timezone]
params: [timezone]
*/
import { useRouter } from 'next/router'

function filterSlashes(str) {
    //Replace all - with /
    return str.replace(/-/g, '/')
}

function getTimezone(timezone) {
    //Get the timezone
    const tz = filterSlashes(timezone)
    return tz
}

function currentTime(rawTz){
    //Get the timezone
    const tz = getTimezone(rawTz)

    //Get the current time in the timezone
    const date = new Date()

    let timedate = {
        time: date.toLocaleTimeString( { timeZone: tz }),
        date: date.toLocaleDateString({ timeZone: tz }),
        timezone: tz
    }
    return timedate
}

export default function handler(req, res) {
    const { timezone } = req.query
    try {
        const time = currentTime(timezone)
        res.status(200).json(time)
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
}
  


  