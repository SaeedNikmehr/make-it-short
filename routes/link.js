const express = require('express')
const LinkController = require('../app/controllers/LinkController')
const validator = require('../app/providers/validations/link')


const router = express.Router();

router.post('/create', validator.createLinkRules() , validator.validate, LinkController.createLink)
router.post('/revert', validator.revertLinkRules() , validator.validate, LinkController.revertLink)


module.exports = router;