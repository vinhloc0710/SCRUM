
const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')
const auth = require('../middleware/auth')



router.post('/upload_accom',auth,uploadImage,uploadCtrl.uploadImg)


module.exports = router;