"use strict";
class TodoList {
    constructor() {
        this.todos = []; //I want to initialize a new array evrytime a new instance of TodoList is created
        this.todoId = 1; //I want to initialize a new id everytime a new instance of TodoList is created
    }
    addTodo(task) {
        if (task) {
            this.todos.push({
                id: this.todoId++,
                text: task,
                completed: false,
            });
        }
        else {
            console.log("Task cannot be empty");
        }
    }
    completeTodo(id) {
        const todoItem = this.todos.find((todo) => todo.id === id);
        if (todoItem) {
            if ((todoItem === null || todoItem === void 0 ? void 0 : todoItem.completed) === false) {
                todoItem.completed = true;
            }
            else {
                console.log("Task already completed");
            }
        }
        else {
            console.log("Task not found");
        }
    }
    removeTodo(id) {
        const todoItem = this.todos.find((todo) => todo.id === id);
        if (todoItem) {
            this.todos.splice(this.todos.indexOf(todoItem), 1);
        }
        else {
            console.log("Task not found");
        }
    }
    listTodos() {
        if (this.todos.length === 0) {
            console.log("No tasks found");
            return []; //if there is no task, return an empty array
        }
        return this.todos;
    }
    filterCompletedTodos() {
        if (this.todos.length === 0) {
            console.log("No tasks found");
            return []; //if there is no task, return an empty array
        }
        return this.todos.filter((todo) => todo.completed === true);
    }
    clearCompletedTodos() {
        const completedTodos = this.filterCompletedTodos();
        if (completedTodos.length > 0) {
            completedTodos.forEach((todo) => {
                console.log("Removing task: ", todo);
            });
        }
    }
}
const todoList = new TodoList();
todoList.addTodo("Buy milk");
todoList.addTodo("Buy eggs");
todoList.addTodo("Buy bread");
todoList.addTodo("Buy butter");
todoList.completeTodo(1);
todoList.completeTodo(2);
todoList.clearCompletedTodos();
console.log();
console.log(todoList.listTodos());
