const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/furitDB',{useNewUrlParser:true})

const fruitSchema= new mongoose.Schema({
  name:String,
  rating: Number
})

const Fruit=mongoose.model("Fruit",fruitSchema)

const fruits=new Fruit ({
  name:"Apple"
  ,rating:5
})


const banana=new Fruit ({
  name:"banana"
  ,rating:5
})

const koko=new Fruit ({
  name:"koko"
  ,rating:5
})

const batik=new Fruit ({
  name:"batik"
  ,rating:5
})

//Fruit.insertMany([banana,koko]);
batik.save()

const personSchema= new mongoose.Schema({
  name:String,
  age: Number
  ,favFruit:fruitSchema

})

const Person=mongoose.model("Person",personSchema)

const personn=new Person ({
  name:"omar"
  ,age:20
})

const hamada=new Person ({
  name:"hamd"
  ,age:20,
  favFruit:batik
})

hamada.save()


Fruit.deleteOne({name:"koko"},function(err){
  if (err) {
    console.log(err);
  }else {
    console.log("Succesful");
  }
} )



Fruit.find(function (err,fruit) {
  if (err) {
    console.log(err);
  }else {
    mongoose.connection.close();
    fruit.forEach(function (fruits) {
    console.log(fruits.name);
    });  }
})
