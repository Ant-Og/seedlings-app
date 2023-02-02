const mongoose = require('mongoose');
const Plant = require('./plant.model');
const User = require('./user.model');

const mongoDbUrl =
  'mongodb+srv://Anthony-O:CC8txqzZ16v2lcra@cluster0.61xuyqe.mongodb.net/seedling';

const connectToMongoDb = (dbUrl) => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Successfully connected to MongoDB (${dbUrl})`))
    .catch((error) => {
      throw new Error(`Something went wrong (${error.message})`);
    });
};

const seedDB = async (model, data) => {
  await model.deleteMany({});
  await model.insertMany(data);
};

const users = [
  {
    username: 'john123',
    password: '123',
    email: 'john@john.com',
    fullName: 'John Oak',
    address: 'Milton\nInvergordon\nRoss Shire\nIV18 0NQ',
    userGardenPatch: [],
  },
];

const plants = [
  {
    img: 'pink prayer plant',
    use: 'hanging',
    latinName: 'Maranta leuconeura erythroneura',
    lightTolered: 'Diffuse light (Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 25,
    lightIdeal: 'Strong light (21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 51,
    id: 'f66ad303-c2ff-55ac-8689-036553b740fe',
    widthPotential: null,
    family: 'Marantaceae',
    heightPotential: 25,
    description: null,
    temperatureMax: 28,
    watering: 'Keep moist between watering & Water when soil is half dry',
    commonName: ["Herringbone", "Pink praying plant"],
    temperatureMin: 12,
    colorOfLeaf: ['Medium green', 'Red'],
    climate: 'Tropical',
  },

  {
    img: 'kentia plam',
    use: 'Potted plant',
    latinName: 'Howea forsteriana',
    lightTolered: 'Diffuse light (Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 272,
    lightIdeal: 'Strong light (21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 274,
    id: '200d6e4f-a42f-5c26-9b00-dfc774af68c',
    widthPotential: 610,
    family: 'Arecaceae',
    heightPotential: 610,
    description: null,
    temperatureMax: 28,
    watering: 'Water when soil is half dry & Can dry between watering',
    commonName: ['Kentia palm', 'Paradise palm'],
    temperatureMin: 12,
    colorOfLeaf: ['Dark green'],
    climate: 'Tropical',
  },

  {
    img: 'snake plant',
    use: 'Potted plant',
    latinName: 'Sansevieria trifasciata var',
    lightTolered: 'Diffuse light (Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 76,
    lightIdeal: 'Strong light (21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 25,
    id: '200d6e4f-a42f-5c26-9b00-dfc774af68c3"',
    widthPotential: null,
    family: 'Arecaceae',
    heightPotential: 122,
    description: null,
    temperatureMax: 35,
    watering: 'Water when soil is half dry & Can dry between watering',
    commonName: ['Snake plant'],
    temperatureMin: 10,
    colorOfLeaf: ['Dark green'],
    climate: 'Tropical',
  },

  {
    img: 'Zz plant',
    use: 'Table plant',
    latinName: 'Zamioculcas zamifolia',
    lightTolered: 'Diffuse light (Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 46,
    lightIdeal: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 30,
    id: 'be76b95e-4e38-5acc-8ad3-065cda54dff2',
    widthPotential: 91,
    family: 'Araceae',
    heightPotential: 122,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Water when soil is half dry',
    commonName: ['Zz plant'],
    temperatureMin: 12,
    colorOfLeaf: ['Dark green'],
    climate: 'Tropical',
  },

  {
    img: 'Swiss Cheese plant',
    use: 'Potted plant',
    latinName: 'Monstera deliciosa',
    lightTolered: 'Diffuse light ( Less than 5,300 lux / 500 fc)',
    heightAtPurchase: null,
    lightIdeal: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 122,
    id: 'b1c94d56-198f-524e-acc7-5d7096a3d4af',
    widthPotential: null,
    family: 'Araceae',
    heightPotential: null,
    description: null,
    temperatureMax: 32,
    watering: 'Water when soil is half dry & Can dry between watering',
    commonName: ['Zz plant'],
    temperatureMin: 12,
    colorOfLeaf: ['Dark green'],
    climate: 'Tropical',
  },

  {
    img: 'Tall Rubber plant',
    use: 'Potted plant',
    latinName: 'Ficus elastica Robusta',
    lightTolered: 'Strong light (21,500 to 3,200 lux/2000 to 300 fc)',
    heightAtPurchase: 122,
    lightIdeal: 'Full sun (+21,500 lux /+2000 fc )',
    widthAtPurchase: 61,
    id: 'eef56d69-ad1d-5d8a-8211-dbc796be1d69',
    widthPotential: 305,
    family: 'Moraceae',
    heightPotential: 635,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Can dry between watering',
    commonName: ['Rubber plant'],
    temperatureMin: 10,
    colorOfLeaf: ['light green'],
    climate: 'Tropical',
  },

  {
    img: 'Fatsia Japonica',
    use: 'Table top',
    latinName: 'Fatsia Japonica',
    lightTolered: 'Full sun (+21,500 lux /+2000 fc )',
    heightAtPurchase: 51,
    lightIdeal: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 51,
    id: 'eef56d69-ad1d-5d8a-8211-dbc796be1d69',
    widthPotential: 183,
    family: 'Araliaceae',
    heightPotential: 183,
    description: null,
    temperatureMax: 28,
    watering: 'Keep moist between watering & Water when soil is half dry',
    commonName: ['Japanese Aralia'],
    temperatureMin: 8,
    colorOfLeaf: ['medium green'],
    climate: 'Subtropical',
  },

  {
    img: 'Dracaena Lemon & Lime',
    use: 'Table top',
    latinName: 'Dracaena deremensis Lemon Lime',
    lightTolered: 'Diffuse light (Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 30,
    lightIdeal: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 25,
    id: '8a486f54-050d-5bec-82fc-3161a3b8ccaa',
    widthPotential: 122,
    family: 'Moraceae',
    heightPotential: 366,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Can dry between watering',
    commonName: ['Striped Dracaena'],
    temperatureMin: 10,
    colorOfLeaf: ['light green', 'lime'],
    climate: 'Tropical',
  },

  {
    img: 'Tall Fiddle-Leaf Fig',
    use: 'Potted plant',
    latinName: 'Ficus lyrata',
    lightTolered: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    heightAtPurchase: 183,
    lightIdeal: 'Full sun (+21,500 lux /+2000 fc )',
    widthAtPurchase: 107,
    id: 'ca712268-773a-5de1-82e1-f93306f46618',
    widthPotential: 305,
    family: 'Liliaceae',
    heightPotential: 635,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Can dry between watering',
    commonName: ['Fidleleaf fig'],
    temperatureMin: 10,
    colorOfLeaf: ['light green'],
    climate: 'Tropical',
  },

  {
    img: "Hanging Sedum Burro's Tail",
    use: 'Hanging',
    latinName: 'Sedum morganianum',
    lightTolered: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    heightAtPurchase: 25,
    lightIdeal: 'Full sun (+21,500 lux /+2000 fc )',
    widthAtPurchase: 15,
    id: '698cf416-7013-5ce7-995b-607282ec5b2f',
    widthPotential: null,
    family: 'Crasssulaceae',
    heightPotential: null,
    description: null,
    temperatureMax: 35,
    watering: 'Must dry between watering & Water only when dry',
    commonName: ['Burro-tail'],
    temperatureMin: 8,
    colorOfLeaf: ['light green'],
    climate: 'Arid Tropical',
  },

  {
    img: 'Sago Palm',
    use: 'Potted plant',
    latinName: 'Cycas revoluta',
    lightTolered: null,
    heightAtPurchase: 91,
    lightIdeal: 'Strong light (21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 107,
    id: 'eef56d69-ad1d-5d8a-8211-dbc796be1d69',
    widthPotential: 152,
    family: 'Cycadaceae',
    heightPotential: 183,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Can dry between watering',
    commonName: ['Sago Palm', 'King sago'],
    temperatureMin: 8,
    colorOfLeaf: ['Dark green'],
    climate: 'Tropical',
  },

  {
    img: 'Tall Yucca plant',
    use: 'Potted plant',
    latinName: 'Yucca elephantipes',
    lightTolered: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    heightAtPurchase: 183,
    lightIdeal: 'Full sun (+21,500 lux /+2000 fc )',
    widthAtPurchase: 91,
    id: 'a5178737-1b07-56b8-8667-0be3477fef48',
    widthPotential: 152,
    family: 'Moraceae',
    heightPotential: 366,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Water when soil is half dry',
    commonName: ['Spineless yucca', 'Palm lily'],
    temperatureMin: 12,
    colorOfLeaf: ['Medium green'],
    climate: 'Subtropical',
  },
];

connectToMongoDb(mongoDbUrl);

seedDB(Plant, plants)
  .then(() => seedDB(User, users))
  .then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
  });
