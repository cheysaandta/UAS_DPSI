const { db } = require('../firebase');

const getInformation = async (req, res) => {
  const snapshot = await db.collection('information').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.json(data);
};

const addInformation = async (req, res) => {
  const data = req.body;
  await db.collection('information').add(data);

  res.status(201).send('Information added successfully');
};

const updateInformation = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const docRef = db.collection('information').doc(id);
  await docRef.update(data);

  res.send('Information updated successfully');
};

const deleteInformation = async (req, res) => {
  const { id } = req.params;

  const docRef = db.collection('information').doc(id);
  await docRef.delete();

  res.send('Information deleted successfully');
};

module.exports = { getInformation, addInformation, updateInformation, deleteInformation };
