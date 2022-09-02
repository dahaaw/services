const { Router } = require('express');
const router = Router();
const { projectsController } = require('../controllers');
const { projectsValidator } = require('../validators');

router.get( '/', projectsController.getAll );
router.post( '/', projectsValidator.add, projectsController.add );

module.exports = router;