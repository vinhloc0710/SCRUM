const express = require('express');
const router = express.Router();
const uploadImage = require('../middleware/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')

router.post('/upload_img', uploadCtrl.uploadImg)

module.exports = router;