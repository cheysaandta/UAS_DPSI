const express = require('express');
const { getServiceRequests, processServiceRequest } = require('../controllers/serviceController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticateJWT);

router.get('/', getServiceRequests);
router.put('/:id', processServiceRequest);

module.exports = router;
