var Song = Backbone.Model.extend({

    urlRoot : "/api/songs",

    defaults: {
        genre : 'Jazz',
        numberOfPlays : 0
    },
    validate : function (attrs) {
        if(!attrs.title) return "Title is required";
    },

    play : function(){
        var numberOfPlays = this.get("numberOfPlays");
        this.set("numberOfPlays", numberOfPlays+1)
    },

    initialize : function(){
        console.log("A new song has been created");
    }
});