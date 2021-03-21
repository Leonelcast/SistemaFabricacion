const express = require('express');

const router = express.Router()


router.get('/intento', (req, res)=>{
    const intento = 'Hola mundo'
    const total = intento
    res.send({
        total
    })
})

module.exports = router;