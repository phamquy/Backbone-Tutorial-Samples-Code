
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

//--------------------------------
// Connection to Server
