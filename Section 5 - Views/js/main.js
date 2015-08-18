
// Models
var Song = Backbone.Model.extend({
    defaults : {
        listeners : 0
    }
});
var Songs = Backbone.Collection.extend({
    model : Song
});



// Views
var SongView = Backbone.View.extend({
    tagName : "li",
    events : {
        "click" :"onClick",
        "click .bookmark" : "onClickBookmark"
    },

    onClick:function(){
      console.log("Listen Clicked");
    },

    onClickBookmark : function (e) {
        e.stopPropagation();
        console.log("Bookmark clicked");
    },

    initialize : function () {
        this.model.on("change", this.onModelChange, this);
    },

    onModelChange : function () {
        this.$el.addClass("someClass");
    },
    render : function(){
        this.$el.html(this.model.get("title") + "- Listeners: " + this.model.get("listeners"));
        this.$el.attr("id", this.model.id);
        return this;
    }
})


var SongsView = Backbone.View.extend({
    tagName: "ul",

    initialize : function () {
        this.model.on("add", this.onSongAdded, this);
        this.model.on("remove", this.onSongRemoved, this);
    },

    onSongAdded : function (song) {
        var songView = new SongView({model : song});
        this.$el.append(songView.render().$el);
    },

    onSongRemoved: function (song) {
       // this.$el.find("li#"  + song.id).remove();
        this.$("li#" + song.id).remove();
    },
    render : function(){
        var self = this;
        self.model.each(function (song) {
            var songView = new SongView({model : song});
            self.$el.append(songView.render().$el);
        })
    }
})



// Show in HTML
var songs = new Songs([
    new Song({id: 1, title: "Blue in Green"}),
    new Song({id: 2, title: "So WHat"}),
    new Song({id: 3, title: "All red"})
]);


var songsView = new SongsView({el:"#songs", model : songs});
songsView.render();


//var song = new Song({title : "Goog game"});
//var songview  = new SongView({el : "#songs", model: song});
//songview.render();

