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


var Car = Vehicle.extend({
    start : function (){
        console.log("Car with registration numer" + this.registrationNumber + "started");
    }
});


var car = new Car({
    registrationNumber : "XLI887",
    color : "blue"
});


car.unset ("registrationNumber");
if (!car.isValid()) {
    console.log(car.validationError);
}
