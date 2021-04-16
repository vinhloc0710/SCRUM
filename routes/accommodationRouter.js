  
const router = require('express').Router()
const accommodationCtrl = require('../controllers/accommodationCtrl')


router.route('/accoms')
    .get(accommodationCtrl.getAccoms)
    .post(accommodationCtrl.createAccoms)





module.exports = router