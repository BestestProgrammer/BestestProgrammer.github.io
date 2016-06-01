//Svetlozar Utsenov

//0. make a to do list
var todosList = [];

//1. make a function to display
var displayTodos = function(){
	console.log(todosList);
}

//2. 1. make a function to add a todo
var addTodo = function(todo){
	todosList.push(todo);
	displayTodos();
}

//3. make a function to change a todo
var changeTodo = function(itemNumber, edit){
	todosList[(itemNumber - 1)] = edit;
	displayTodos();
}

//4. make a function to delete a todo
var deleteTodoNumber = function(itemNumber){
	todosList.splice((itemNumber - 1),1);
	displayTodos();
}

//Test:
displayTodos();

addTodo("Item 1");
addTodo("Item 2");
addTodo("Item 3");
addTodo("Item 4");

changeTodo(2, "Item TWO");

deleteTodoNumber(3);

