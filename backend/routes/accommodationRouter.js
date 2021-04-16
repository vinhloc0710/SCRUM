  
const router = require('express').Router()
const accommodationCtrl = require('../controllers/accommodationCtrl')


router.route('/accoms')
    .get(accommodationCtrl.getAccoms)
    .post(accommodationCtrl.createAccoms)
router.route('/accoms/:id').get(accommodationCtrl.getAccomSingle);






module.exports = router