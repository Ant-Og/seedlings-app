const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
  Categories: {
    type: 'String',
  },
  Disease: {
    type: 'String',
  },
  Img: {
    type: 'String',
  },
  Use: {
    type: ['String'],
  },
  'Latin name': {
    type: 'String',
  },
  Insects: {
    type: ['String'],
  },
  Avaibility: {
    type: 'String',
  },
  Style: {
    type: 'String',
  },
  Bearing: {
    type: 'String',
  },
  'Light tolered': {
    type: 'String',
  },
  'Height at purchase': {
    M: {
      type: 'Number',
    },
    CM: {
      type: 'Number',
    },
  },
  'Light ideal': {
    type: 'String',
  },
  'Width at purchase': {
    M: {
      type: 'Number',
    },
    CM: {
      type: 'Number',
    },
  },
  id: {
    type: 'String',
  },
  Appeal: {
    type: 'String',
  },
  Perfume: {
    type: 'Mixed',
  },
  Growth: {
    type: 'String',
  },
  'Width potential': {
    M: {
      type: 'Number',
    },
    CM: {
      type: 'Number',
    },
  },
  'Common name (fr.)': {
    type: 'String',
  },
  Pruning: {
    type: 'String',
  },
  Family: {
    type: 'String',
  },
  'Height potential': {
    M: {
      type: 'Number',
    },
    CM: {
      type: 'Number',
    },
  },
  Origin: {
    type: ['String'],
  },
  Description: {
    type: 'Mixed',
  },
  'Temperature max': {
    F: {
      type: 'Number',
    },
    C: {
      type: 'Number',
    },
  },
  'Blooming season': {
    type: 'String',
  },
  Url: {
    type: 'String',
  },
  'Color of leaf': {
    type: ['String'],
  },
  Watering: {
    type: 'String',
  },
  'Color of blooms': {
    type: 'String',
  },
  Zone: {
    type: ['String'],
  },
  'Common name': {
    type: ['String'],
  },
  'Available sizes (Pot)': {
    type: 'String',
  },
  'Other names': {
    type: 'Mixed',
  },
  'Temperature min': {
    F: {
      type: 'Number',
    },
    C: {
      type: 'Number',
    },
  },
  'Pot diameter (cm)': {
    M: {
      type: 'Number',
    },
    CM: {
      type: 'Number',
    },
  },
  Climat: {
    type: 'String',
  },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
