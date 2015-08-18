/**
 * Created by jack on 8/17/15.
 */
var TodoItem = Backbone.Model.extend({
    defaults : {
        isCompleted : false
    },

    url : "http://jsonplaceholder.typicode.com/todos",
    validate : function(attrs){
        if(!attrs.title) {
            return "Description is required";
        }
    },

    toggle : function(){
        this.set("completed", !this.get("completed"));
    }
});