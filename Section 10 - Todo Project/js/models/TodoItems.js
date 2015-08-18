/**
 * Created by jack on 8/17/15.
 */
var TodoItems = Backbone.Collection.extend({
    model : TodoItem,
    url : "http://jsonplaceholder.typicode.com/todos"
});