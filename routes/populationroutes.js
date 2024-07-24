const express = require('express');
const { getPopulationData, addPopulationData, updatePopulationData, deletePopulationData } = require('../controllers/populationController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticateJWT);

router.get('/', getPopulationData);
router.post('/', addPopulationData);
router.put('/:id', updatePopulationData);
router.delete('/:id', deletePopulationData);

module.exports = router;
