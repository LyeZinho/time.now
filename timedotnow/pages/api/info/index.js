/*
Return the api info:

info: ../info.json
*/


import { useRouter } from 'next/router'
const info = require('../info.json')

export default function handler(req, res) {
    try {
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}