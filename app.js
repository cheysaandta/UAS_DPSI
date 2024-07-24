const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authroutes');
const populationRoutes = require('./routes/populationroutes');
const serviceRoutes = require('./routes/serviceroutes');
const informationRoutes = require('./routes/informationroutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/population', populationRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/information', informationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
