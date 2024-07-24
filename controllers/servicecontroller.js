const { db } = require('../firebase');

const getServiceRequests = async (req, res) => {
  const snapshot = await db.collection('services').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.json(data);
};

const processServiceRequest = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const docRef = db.collection('services').doc(id);
  await docRef.update({ status });

  res.send('Service request processed successfully');
};

module.exports = { getServiceRequests, processServiceRequest };
