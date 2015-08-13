var ArtistsView = Backbone.View.extend({
    render : function () {
        this.$el.html("ARTISTS VIEW");
        return this;
    }
});

var AlbumsView = Backbone.View.extend({
    render : function(){
        this.$el.html("ALBUMS VIEW");
        return this;
    }
});

var GenresView = Backbone.View.extend({
    render : function (){
        this.$el.html("GENRES VIEW");
        return this;
    }
});
 

var AppRouter = Backbone.Router.extend({
    routes : {
        "albums" :"viewAlbums",
        "albums/:albumId" : "viewAlbumById",
        "artists" : "viewArtists",
        "genres" : "viewGenres",
        "*other" : "defaultRoute"
    },
    
    
    viewArtists : function(){
        console.log("viewArtists");
        var view = new ArtistsView({ el : "#container" });
        view.render();
    },
    
    viewGenres: function(){
        console.log("viewGenres")
        var view = new GenresView({ el: "#container" });
        view.render();
    },
    
    viewAlbums : function(){
        console.log("viewAlbums")
        var view = new AlbumsView({ el : "#container" });
        view.render();
    },
    
    viewAlbumById: function (albumId) {
        
    },
    
    defaultRoute : function (){
    }
});
    

var router = new AppRouter();
Backbone.history.start();



var NavView = Backbone.View.extend({
    events : {
        "click" : "onClick"
    },
    
    onClick : function (e){
        var $li = $(e.target);
        router.navigate($li.attr("data-url"), {trigger: true});
    }
});

var navView = new NavView({el : "#nav"});