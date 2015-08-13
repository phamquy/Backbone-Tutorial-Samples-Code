var person = {
    name : "Mosh",
    walk : function(){
        this.trigger("walking", {
            speed : 1,
            startTime: "8:00"
        });
    }
};

_.extend(person , Backbone.Events);

//person.on("walking", function(e){
//    console.log("Person is walking");
//    console.log("Event:" + e);
//});

//person.off("walking");

person.once("walking", function(e){
    console.log("Person is walking");
    console.log("Event:" + e);
});

person.walk();
person.walk();
