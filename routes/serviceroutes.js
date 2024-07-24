const express = require('express');
const { getServiceRequests, processServiceRequest, createServiceRequest } = require('../controllers/servicescontroller');
const authenticateJWT = require('../middlewares/authmiddleware');

const router = express.Router();

router.use(authenticateJWT);

// Route to fetch all service requests
router.get('/', getServiceRequests);

// Route to process a specific service request
router.put('/:id', processServiceRequest);

// Route to create a new service request
router.post('/', createServiceRequest);

module.exports = router;
