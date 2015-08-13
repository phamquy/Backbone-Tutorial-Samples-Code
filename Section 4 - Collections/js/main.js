
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    defaults: {
        genre : 'Jazz'
    },
    validate : function (attrs) {
        if(!attrs.title) return "Title is required";
    },
    initialize : function(){
        console.log("A new song has been created");
    }
});

var song = new Song();

song.set({
    title: "Blue in greean",
    artist : "Mike Miles",
    publishYear : 1989
});


var Songs = Backbone.Collection.extend({
    model : Song,
    url : "/api/songs"
});

var songs = new Songs([
    new Song({title : "Song 1"}),
    new Song({title : "Song 2"}),
    new Song({title : "Song 3"})
]);

songs.add(new Song({title: "Song 4"}));
songs.add(new Song({title: "Song 5", genre: "Jazz", downloads : 110 }), {at : 0});
songs.push(new Song({title: "Song 6", genre: "Jazz", downloads : 22 }));



var jazzSongs = songs.where({genre: "Jazz"});
var firstJazzSong=  songs.findWhere({genre: "Jazz"});


var topDownloadSongs = songs.filter(function(song){
    return song.get("downloads") > 100;
})
//---------------------------------
/// INHERITANCE

var Animal = Backbone.Model.extend({
   walk : function () {
       console.log("Animal walking....");
   }
});

var Dog = Animal.extend({
    walk : function () {
        Animal.prototype.walk.apply(this);
        console.log("Dog walking....");
    }
});
var dog = new Dog();

dog.walk();


// EXE

var Vehicle  = Backbone.Model.extend({
    urlRoot : "api/vehicles",
    defaults : {
        registrationNumber: null
    },
    validate : function (attrs) {
        if (!attrs.registrationNumber) {
            return "Registration Number is required";
        }
    },
    start : function () {
        console.log("Vehicle start");
    }
});

var Vehicles=  Backbone.Collection.extend({
    model : Vehicle,
    url : "api/vehicles"
});

var Car = Vehicle.extend({
    start : function (){
        console.log("Car with registration numer" + this.registrationNumber + "started");
    }
});



var car = new Car({
    registrationNumber : "XLI887",
    color : "blue"
});


var vehicles = new Vehicles([
    new Car({registrationNumer : "XH242", color: "green"}),
    new Car({registrationNumer : "XAG242", color: "blue"}),
    new Car({registrationNumer : "XHF242", color: "blue"})
])

vehicles.add(car);
var blueCars = vehicles.where({color: "blue"});

blueCars.forEach(function (car) {
    console.log(car.toJSON());
});

vehicles.each(function (car) {
    console.log(car.toJSON());
})

console.log(vehicles.findWhere({registrationNumer: "XLI887"}));
console.log(vehicles.toJSON());


car.unset ("registrationNumber");
if (!car.isValid()) {
    console.log(car.validationError);
}
