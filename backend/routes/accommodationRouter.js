  
const router = require('express').Router()
const accommodationCtrl = require('../controllers/accommodationCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/accoms')
    .get(accommodationCtrl.getAccoms)
    .post(auth,accommodationCtrl.createAccoms)
router.route('/accoms/:id')
    .get(auth,accommodationCtrl.getAccomSingle)
    .delete(auth,accommodationCtrl.deleteAccoms)
    .put(auth,accommodationCtrl.updateAccoms)






module.exports = router