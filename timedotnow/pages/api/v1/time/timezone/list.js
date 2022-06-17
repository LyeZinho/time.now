const list = require('./timezone.json')

/*
Endpoint: /api/v1/time/timezone/list
*/

export default function handler(req, res) {
    res.status(200).json(list)
}