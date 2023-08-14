// const Submission = require('../models/Submission');

// Get all pending submissions from DB
// const submissionController = {
//   getPendingSubmissions: async (req, res) => {
//     try {
//       const submissions = await Submission.find({ approved: false });
//       res.json(submissions);
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },

//   submitResource: async (req, res) => {
//     try {
//       // Write logic to validate form data; if form approved,  set isAdmin to true in JWT payload
//       const token = jwt.sign({ isAdmin: true }, config.jwtSecret, { expiresIn: '7 days' });

//       // Store token in submission document
//       const newSubmission = await Submission.create({ ...req.body, token });
//       res.json(newSubmission);
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },
// };

// module.exports = submissionController;
