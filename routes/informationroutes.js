const express = require('express');
const { getInformation, addInformation, updateInformation, deleteInformation } = require('../controllers/informationController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticateJWT);

router.get('/', getInformation);
router.post('/', addInformation);
router.put('/:id', updateInformation);
router.delete('/:id', deleteInformation);

module.exports = router;
