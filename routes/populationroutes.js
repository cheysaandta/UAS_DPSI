const express = require('express');
const { getPopulationData, addPopulationData, updatePopulationData, deletePopulationData } = require('../controllers/populationcontroller');
const authenticateJWT = require('../middlewares/authmiddleware');

const router = express.Router();

router.use(authenticateJWT);

router.get('/', getPopulationData);
router.post('/', addPopulationData);
router.put('/:id', updatePopulationData);
router.delete('/:id', deletePopulationData);

module.exports = router;
