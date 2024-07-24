const { db } = require('../firebase');

// Fetch all service requests
const getServiceRequests = async (req, res) => {
  try {
    const snapshot = await db.collection('services').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch service requests', error });
  }
};

// Process a specific service request
const processServiceRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const docRef = db.collection('services').doc(id);
    await docRef.update({ status });

    res.send('Service request processed successfully');
  } catch (error) {
    res.status(500).json({ message: 'Failed to process service request', error });
  }
};

// Create a new service request
const createServiceRequest = async (req, res) => {
  try {
    const { type, description, userEmail } = req.body;
    const newServiceRequest = {
      type,
      description,
      status: 'pending',
      userEmail,
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection('services').add(newServiceRequest);
    res.status(201).json({ id: docRef.id, ...newServiceRequest });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create service request', error });
  }
};

module.exports = { getServiceRequests, processServiceRequest, createServiceRequest };
