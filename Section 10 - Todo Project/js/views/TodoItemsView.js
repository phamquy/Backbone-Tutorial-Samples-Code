/**
 * Created by jack on 8/17/15.
 */
var TodoItemsView = Backbone.View.extend({


    initialize: function (options) {
        if (!(options && options.model)) {
            throw Error("Model is not specified");
        }

        this.model.on("add", this.onAddTodoItem, this);
        this.model.on("remove", this.onRemoveTodoItem, this);
    },

    onRemoveTodoItem: function(todoItem){
        this.$("li#" + todoItem.id).remove();
    },

    onAddTodoItem : function(todoItem){
        var view = new TodoItemView({model: todoItem});
        this.$("#todoItems").append(view.render().$el);
    },

    events : {
        "click #add":"onClickAdd",
        "keypress #newTodoItem" : "onKeyPress"
    },

    onKeyPress: function(e){
        if(e.keyCode == 13){
            this.onClickAdd();
        }
    },

    onClickAdd : function(){
        var $textBox = this.$("#newTodoItem");

        if($textBox.val()) {
            var todoItem = new TodoItem({title: $textBox.val()});
            //todoItem.save();
            //this.model.add(todoItem);
            this.model.create(todoItem);
            $textBox.val("");
        }
    },

    render: function () {

        //this.$el.append("<input type='text' autofocus id='newTodoItem'/>");
        //this.$el.append("<button id='add'>Add</button>");
        //this.$el.append("<ul id='todoItems'></ul>");
        var template = $("#todoItemsTemplate").html();
        var html = Mustache.render(template);
        this.$el.html(html)
        return this;
    }
});