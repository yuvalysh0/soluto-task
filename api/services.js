const express = require('express')
const router = express.Router()
const logic = require('./logic')

router.get('/', (req, res) => {
    let deviceType = req.query.deviceType
    let problemType = req.query.problemType

    const result = logic.getServices(deviceType, problemType)
        res.status(200).json({
            services: result
        })
})

module.exports = router
