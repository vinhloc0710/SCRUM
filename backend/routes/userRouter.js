const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout',userCtrl.logout)

router.post('/refresh_token',userCtrl.refreshToken)

router.get('/all_infor', userCtrl.getUsersAllInfor)

module.exports = router