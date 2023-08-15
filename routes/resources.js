const express = require('express');
const router = express.Router();
const axios = require('axios');
const Resource = require('../models/Resource');

const getCoordinates = async (address) => {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    );
    const coordinates = response.data.features[0].geometry.coordinates;
    return {
      longitude: coordinates[0],
      latitude: coordinates[1]
    };
  } catch (error) {
    console.log("Error getting coordinates", error);
    return null;
  }
};

// Create a new resource
router.post('/postResource', async (req, res) => {
    const resource = new Resource({
      name: req.body.name,
      address: req.body.address,
      altAddress: req.body.altAddress,
      typeOfResource: req.body.typeOfResource,
      affiliation: req.body.affiliation,
      operatingHours: req.body.operatingHours,
      indoorsOrOutdoors: req.body.indoorsOrOutdoors,
      accessibility: req.body.accessibility,
      lastUpdated: req.body.lastUpdated,
      contact: req.body.contact,
      notes: req.body.notes,
    });
    
    //Get coordinates based on address or alternate address
    const addressCoords = await getCoordinates(req.body.address);
    const altAddressCoords = await getCoordinates(req.body.altAddress);

    // If address throws an error, try alternate
    if (!addressCoords && altAddressCoords) {
      resource.longitude = altAddressCoords.longitude;
      resource.latitude = altAddressCoords.latitude;
    } else if (addressCoords) {
      resource.longitude = addressCoords.longitude;
      resource.latitude = addressCoords.latitude;
    } else {
      res.status(400).json({message: "Error getting coordinates"});
    }

    try {
      const resToSave = await resource.save();
      res.status(200).json(resToSave)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
});

// Get all resources
router.get('/resources', async (req, res) => {
  try {
    const resource = await Resource.find();
    res.json(resource);
  } catch (error) {
    res.status(500).json({message: error.message})
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




// // Get resources in radius of zip code
// router.get('/getInZipCode', async (req, res) => {
//   try {    
//     const  longitude = parseFloat(req.query.longitude);
//     const  latitude = parseFloat(req.query.latitude);
//     const  radius = parseFloat(req.query.radius);

//     const resources = await Resource.find({
//       location: {
//         $geoWithin: {
//           $centerSphere: [[longitude, latitude], radius / 3963.2] // Radius in miles
//         }
//       }
//     });
//     res.json(resources);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// const address = req.body.address;
// let longitude = 0;
// let latitude = 0;
// // Get longitude and latitude from address
// try {
//   // Mapbox Geocoding API for lat/long
//   const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`, { 
//     params: { 
//       access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN, 
//     }, 
//   });

//   // Get coordinates from response
//   if (response.data.features && response.data.features.length > 0) {
//     longitude = response.data.features[0].geometry.coordinates[0];
//     latitude = response.data.features[0].geometry.coordinates[1];