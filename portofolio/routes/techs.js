const { Router } = require('express');
const router = Router();
const { techsController } = require( '../controllers' );
const { techsValidator } = require( '../validators' );


router.get( '/', techsController.getAll );
router.post( '/', techsValidator.add, techsController.add );

module.exports = router;