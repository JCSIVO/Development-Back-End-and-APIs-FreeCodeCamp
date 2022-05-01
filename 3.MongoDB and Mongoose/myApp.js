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


//Usar model.find() para buscar en la base de datos
var findPeopleByName = 
  function(personName, done){
    Person.find({name : personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};


//uso del model findOne() para devolver un unico documento
var findOneByFood = 
  function(food, done){
    Person.findOne({favoriteFoods : food}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};


//uso del model findById para buscar datos por Id
var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};


//Realiza las actualizaciones clásicas terminadas "find", "edit" y "save"

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  // .findById() method to find a person by _id with the parameter personId as search key. 
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};



//Realiza nuevas actualizaciones en un documento usando model.findOneAndUpdate()

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};





//let Person;

//const createAndSavePerson = (done) => {
//  done(null /*, data*/);
//};

//const createManyPeople = (arrayOfPeople, done) => {
//  done(null /*, data*/);
//};

//const findPeopleByName = (personName, done) => {
 // done(null /*, data*/);
//};

//const findOneByFood = (food, done) => {
//  done(null /*, data*/);
//};

//const findPersonById = (personId, done) => {
 // done(null /*, data*/);
//};

//const findEditThenSave = (personId, done) => {
 // const foodToAdd = "hamburger";

  //done(null /*, data*/);
//};

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
