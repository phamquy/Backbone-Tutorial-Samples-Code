/**
 * Created by jack on 8/17/15.
 */
var TodoItemView = Backbone.View.extend({
    tagName : "li",
    initialize : function(options){
        if(!(options && options.model)){
            throw new Error("Model is not specified");
        }

        this.model.on("change", this.render, this);

    },

    events : {
        "click #toggle" : "onClickToggle",
        "click #delete" : "onClickDelete"
    },

    onClickDelete : function(){
        this.model.destroy();
    },

    onClickToggle : function (){
        this.model.toggle();
        this.model.save();
        console.log(this.model.toJSON());
    },

    render : function(){
        this.$el.attr("id", this.model.id);
        this.$el.toggleClass("completed", this.model.get("completed"));

        var template = $("#todoItemTemplate").html();
        var html = Mustache.render(template, this.model.toJSON());

        this.$el.html(html);
        return this;
    }
});