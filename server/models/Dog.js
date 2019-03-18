// require mongoose, MongoDB library for nodejs
const mongoose = require('mongoose');

// Set mongoose's Promise to ES6 promises.
mongoose.Promise = global.Promise;

// variable to hold our Model
let DogModel = {};

// A DB Schema to define our data structure
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },

});

// Schema.statics are static methods attached to the Model or objects
DogSchema.statics.sayName = (dog) => {
  console.log(dog.name);
};

// static function findByName to look up dog by string name
DogSchema.statics.findDogByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

// Create the dog model based on the schema
DogModel = mongoose.model('Dog', DogSchema);


// export public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
