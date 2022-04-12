var express = require('express');
var router = express.Router();
const warningController = require('../controllers/warning.controller');

/* GET warnings. */
router.get('/', warningController.getWarnings);

/* GET warning by Id. */
router.get('/:id', warningController.getWarning);

/* Post warning. */
router.post('/create', warningController.createWarning);

/* patch warning. */
router.patch('/update/:id', warningController.updateWarning);

/* delete warning. */
router.delete('/delete/:id', warningController.deleteWarning);

module.exports = router;
