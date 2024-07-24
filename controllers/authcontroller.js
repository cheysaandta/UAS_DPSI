const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('../firebase');
const { JWT_SECRET } = process.env;

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const userRef = db.collection('users').doc(email);
  await userRef.set({ email, password: hashedPassword, role });

  res.status(201).send('User registered successfully');
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userRef = db.collection('users').doc(email);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    return res.status(404).send('User not found');
  }

  const user = userDoc.data();

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(403).send('Invalid credentials');
  }

  const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET);

  res.json({ token });
};

module.exports = { register, login };
