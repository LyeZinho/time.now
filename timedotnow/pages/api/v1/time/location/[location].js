const { find } = require('geo-tz')
import { useRouter } from 'next/router'

/*
    endpoint: /api/v1/time/location/[location]
    params: [location] -> 47.650499*-122.350070
*/

function filter(str){
    let strArr = str.split('*')
    let lat = strArr[0]
    let lng = strArr[1]
    return {latitude: lat, longitude: lng}
}    

function findTimeZone(str){
    let timeZone = find(str.latitude, str.longitude)
    return timeZone[0]
}

function currentTime(rawTz){
    const tz = rawTz
    const date = new Date()
    let timedate = {
        time: date.toLocaleTimeString( { timeZone: tz }),
        date: date.toLocaleDateString({ timeZone: tz }),
        timezone: tz
    }
    return timedate
}


export default function handler(req, res) {
    const { location } = req.query
    try {
        let geo = filter(location)
        let timeZone = findTimeZone(geo)
        const time = currentTime(timeZone)
        res.status(200).json(time)
    }
    catch(err) {
        res.status(500).json({ error: err.message })
    }
}