const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');
// const resourceController = require('../controllers/resourceController');


// Create a new resource
router.post('/postResource', async (req, res) => {
  const resource = new Resource({
    name: req.body.name,
    address: req.body.address,
    typeOfResource: req.body.typeOfResource,
    affiliation: req.body.affiliation,
    operatingHours: req.body.operatingHours,
    indoorsOrOutdoors: req.body.indoorsOrOutdoors,
    accessibility: req.body.accessibility,
    lastUpdated: req.body.lastUpdated,
    contact: req.body.contact,
    notes: req.body.notes,
    // longitude: req.body.longitude,
    // latitude: req.body.latitude
  })
  try {
    const resToSave = await resource.save();
    res.status(200).json(resToSave)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});
// Where should I be putting my logic for getting latitude and longitude from an address? And then how should that get passed to the model and database? 

// Get all resources
router.get('/resources', async (req, res) => {
  try {
    const resource = await Resource.find();
    res.json(resource);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

// Get resources in radius of zip code
router.get('/getInZipCode', async (req, res) => {
  try {    
    const  longitude = parseFloat(req.query.longitude);
    const  latitude = parseFloat(req.query.latitude);
    const  radius = parseFloat(req.query.radius);

    const resources = await Resource.find({
      location: {
        $geoWithin: {
          $centerSphere: [[longitude, latitude], radius / 3963.2] // Radius in miles
        }
      }
    });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one resource by ID
router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    res.json(resource);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});
  
// Update a resource by ID
router.patch('/updateResource/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedResource = req.body;
    const options = {new: true};

    const result = await Resource.findByIdAndUpdate(
      id, updatedResource, options
    )
    res.send(result)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});
  
  // Delete a resource by ID
router.delete('/deleteResource/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resource = await Resource.findByIdAndDelete(id)
    res.send(`Resource with id ${id} deleted successfully.`)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});
  
  module.exports = router;