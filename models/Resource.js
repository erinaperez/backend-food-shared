const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  alteranteAddress: {
    type: String,
    required: false
  },
  typeOfResource: { 
    type: String, 
    required: true 
  },
  affiliation: { 
    type: String, 
    required: false 
  },
  operatingHours: { 
    type: String, 
    required: true 
  },
  indoorsOrOutdoors: { 
    type: String, 
    required: true 
  },
  accessibility: { 
    type: String, 
    required: false 
  },
  lastUpdated: { 
    type: Date, 
    required: false 
  },
  contact: { 
    type: String, 
    required: false 
  },
  notes: { 
    type: String, 
    required: false 
  },
  altAddress: {
    type: String,
    required: false
  },
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  }
  // Add/remove fields as needed
});

module.exports = mongoose.model('Resource', resourceSchema);
