// const jwt = require('jsonwebtoken');
// const config = require('config');

// const auth = (req, res, next) => {
//   const token = req.header('x-auth-token');
//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   try {
//     const decoded = jwt.verify(token, config.JWT_SECRET);
//     if (decoded.isAdmin) {
//       req.user = decoded;
//       next();
//     } else {
//       return res.status(401).json({ error: 'Forbidden' });
//     }
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(500).json({ error: 'Server error' });
//   }  
// };

// module.exports = auth;