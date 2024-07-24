const { db } = require('../firebase');

const getPopulationData = async (req, res) => {
  const snapshot = await db.collection('population').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.json(data);
};

const addPopulationData = async (req, res) => {
  const data = req.body;
  await db.collection('population').add(data);

  res.status(201).send('Population data added successfully');
};

const updatePopulationData = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const docRef = db.collection('population').doc(id);
  await docRef.update(data);

  res.send('Population data updated successfully');
};

const deletePopulationData = async (req, res) => {
  const { id } = req.params;

  const docRef = db.collection('population').doc(id);
  await docRef.delete();

  res.send('Population data deleted successfully');
};

module.exports = { getPopulationData, addPopulationData, updatePopulationData, deletePopulationData };
