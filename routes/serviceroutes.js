const express = require('express');
const { getServiceRequests, processServiceRequest } = require('../controllers/servicecontroller');
const authenticateJWT = require('../middlewares/authmiddleware');

const router = express.Router();

router.use(authenticateJWT);

router.get('/', getServiceRequests);
router.put('/:id', processServiceRequest);

module.exports = router;
