const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitDB", { useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection seccessfull..."))
.catch((err) => console.log(err));



const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})


const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    score: 9,
    review: "Great fruit,"
});

mango.save();


const person = new Person({
    name: "Azad",
    age: 22,
    favouriteFruit: mango
});

person.save();



Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});


