require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const personSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
    },

    favoriteFoods: {
        type: Array,
        default: [],
    },
  },
  {timestamps: true}
);

const Person = mongoose.model("Person", personSchema);

//---------------------------------------------------------

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Jonh Doe",
    age: 44,
    favoriteFoods: ["eggs", "rice", "cheeze"]
  })
  person.save(function(err, data) {
    if(err) return console.log(err)
    done(null, data);
  })
};

//----------------------------------------------------------

  const arrayOfPeople = [
    {
      name: "Jana Doe",
      age: 33,
      favoriteFoods: ["tomatoes", "bread", "eggplant"]
    },
    {
      name: "Titi Doe",
      age: 22,
      favoriteFoods: ["salmon", "eggs", "cheeze"]
    },
    {
      name: "Mini Doe",
      age: 11,
      favoriteFoods: ["milk", "rice", "cheeze"]
    },
  ];


const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if(err) return console.log(err);
    done(null, data);
  })
};

//-----------------------------------------------------------

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
