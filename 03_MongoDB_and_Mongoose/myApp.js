require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const personSchema = new Schema({
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
}, {
  timestamps: true
});

const Person = mongoose.model("Person", personSchema);

//---------------------------------------------------------

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Jonh",
    age: 44,
    favoriteFoods: ["eggs", "rice", "cheeze"]
  })
  person.save(function (err, data) {
    if (err) return console.log(err)
    done(null, data);
  })
};

//----------------------------------------------------------

const arrayOfPeople = [{
    name: "Jana",
    age: 33,
    favoriteFoods: ["tomatoes", "bread", "eggplant"]
  },
  {
    name: "Titi",
    age: 22,
    favoriteFoods: ["salmon", "eggs", "cheese"]
  },
  {
    name: "Mini",
    age: 11,
    favoriteFoods: ["milk", "rice", "cheese"]
  },
];


const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  })
};

//-----------------------------------------------------------

const findPeopleByName = (personName, done) => {
  Person.find({
    name: personName
  }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};


//-----------------------------------------------------------

const findOneByFood = (food, done) => {
  Person.findOne({
    favoriteFoods: food
  }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

//-----------------------------------------------------------

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

//-----------------------------------------------------------

const findEditThenSave = (personId, done) => {
  Person.findById(personId, function (err, person) {
    if (err) return console.log(err);
    const foodToAdd = "hamburger";
    person.favoriteFoods.push(foodToAdd);
    person.save(function (err, updatedPerson) {
      if (err) return console.log(err)
      done(null, updatedPerson)
    });
  });
};

//-----------------------------------------------------------

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({
    name: personName
  }, {
    age: ageToSet
  }, {
    new: true
  }, function (err, data) {
    if (err) return console.log(err)
    done(null, data)
  });
};

//-----------------------------------------------------------
/*
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, function(err, data) {
    if(err) return console.log(err);
    done(null, data);
  })
};

*/

const removeById = (personId, done) => {
  Person.findOneAndRemove({
    _id: personId
  }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

//-----------------------------------------------------------

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({
    name: nameToRemove
  }, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

//-----------------------------------------------------------

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person
    .find({
      favoriteFoods: foodToSearch
    })
    .sort({
      name: 1
    })
    .limit(2)
    .select({
      age: 0
    })
    .exec(function (err, persons) {
      if (err) return console.log(err);
      done(null, persons);
    });

};

//-----------------------------------------------------------

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