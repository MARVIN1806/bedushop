const router = require("express").Router()


router.get('/', (req, res) => {
    res.send("Bienvenido a Bedu Shop")
})


router.use('/productos', require('./producto'))
router.use('/usuarios', require("./usuario"))

module.exports = router;