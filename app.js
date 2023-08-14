const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const resourcesRoutes = require('./routes/resources');
// const submissionsRoutes = require('./routes/submissions');

app.use(cors());
// set CORS origin to allow requests from frontend at localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Connect to express server
app.listen(5000, () => { 
  console.log(`Server is running on port ${5000}.`)
});

// Connect to MongoDB Atlas
const mongoStr = process.env.ATLAS_URI;

mongoose.connect(mongoStr);
const dbconnection = mongoose.connection;

dbconnection.on('error', (error) => {
  console.error(error);
});

dbconnection.once('connected', () => {
  console.log('MongoDB connected.');
});

// Routes
app.use('/', resourcesRoutes);
// app.use('/', submissionsRoutes);

module.exports = app;






// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(`mongodb://localhost:27017/resources`, {
//       useNewUrlParser: true,
//   });
//   console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };




// test endpoint
// app.get('/getResources', (req, res) => {
//   Resource.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   })
// })

// Connect to MongoDB Atlas
// mongoose.connect(ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB connection established successfully');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
//   });

// // Error handling 
// app.use((err, req, res) => {
//     console.error(err.stack);
//     res.status(500).json({error: 'Server error'});
// });