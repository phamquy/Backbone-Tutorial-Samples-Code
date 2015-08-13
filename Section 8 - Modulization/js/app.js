define([
    'underscore',
    'backbone',
    'models/song',
    'views/songView'], function(_, Backbone, Song, SongView){

    var initialize = function(){
        var song = new Song({ title :  "Blue in green" });
        var songView = new SongView({el : "#container", model : song});
        songView.render();     
    }
    return {
        initialize : initialize
    };
});