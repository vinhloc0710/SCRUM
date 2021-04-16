const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')



router.post('/upload_accom',uploadImage,uploadCtrl.uploadImg)


module.exports = router