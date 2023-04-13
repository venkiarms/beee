const express = require('express')
const router = express.Router();
const Con = require('../controller/userCon')



router.get('/',Con.getData)
router.post('/',Con.postData)

module.exports = router;