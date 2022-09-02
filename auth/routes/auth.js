const { Router } = require('express');
const router = Router();
const { authController } = require('../controllers');
const { usersValidator } = require('../validators');

router.get( '/all', authController.getAll );
router.post( '/login', usersValidator.login, authController.login );
router.get( '/authenticate', authController.authenticate );
router.post( '/', usersValidator.add, authController.add );

module.exports = router;