require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jose:jose@cluster0.dw5pp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true }); //Instalar y configurar Mongoose

//crear un modelo
var Schema = mongoose.Schema;
var personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]});
var Person = mongoose.model('Person', personSchema);

//crear y guardar el regsitro de un modelo
var createAndSavePerson = function(done) {
  var juanLarriba = new Person({name: "Juan larriba", age: 29, favoriteFoods: ["Spaghetti", "chicken", "orange"]});

  juanLarriba.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

// crear muchos registros con model.create()
var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
}


//let Person;

//const createAndSavePerson = (done) => {
//  done(null /*, data*/);
//};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
