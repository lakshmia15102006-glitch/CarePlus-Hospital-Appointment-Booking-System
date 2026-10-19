require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong on the server' });
});
app.get('/', (req, res) => {
  res.send('CarePlus Hospital Appointment Booking API is running!');
});
mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(process.env.PORT || 5000, () => console.log('Server running on port ' + (process.env.PORT || 5000))))