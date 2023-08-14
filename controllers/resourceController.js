// const Resource = require('../models/Resource');

// const resourceController = {
//   createResource: async (req, res) => {
//     try {
//       const newResource = await Resource.create(req.body);
//       res.json(newResource);
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },

//   getResources: async (req, res) => {
//     try {
//       const resources = await Resource.find({});
//       res.json(resources);
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },

//   getResourceById: async (req, res) => {
//     try {
//       const resource = await Resource.findById(req.params.id);
//       res.json(resource);
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },

//   updateResource: async (req, res) => {
//     try {
//       const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, {new: true});
//       res.json(updatedResource);
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },

//   deleteResource: async (req, res) => {
//     try {
//       await Resource.findByIdAndDelete(req.params.id);
//       res.json({ message: 'Resource deleted successfully' });
//     } catch (error) {
//       res.status(500).json({error: 'Server error'});
//     }
//   },
// };

// module.exports = resourceController;