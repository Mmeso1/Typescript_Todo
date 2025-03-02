interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string;
}

class TodoList {
  private todos: TodoItem[];
  private todoId: number;

  constructor() {
    this.todos = []; //I want to initialize a new array evrytime a new instance of TodoList is created
    this.todoId = 1; //I want to initialize a new id everytime a new instance of TodoList is created
  }

  addTodo(task: string, dueDate?: string): void {
    if (!task) {
      console.log("Task cannot be empty");
      return;
    }

    if (task) {
      let validDate = dueDate;
      if (dueDate) {
        //very basic check of a date format.
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(dueDate)) {
          validDate = "invalid date format";
        }
      }

      this.todos.push({
        id: this.todoId++,
        text: task,
        completed: false,
        dueDate: validDate ? validDate : "not set",
      });
      console.log(`Added task: ${task}\n`);
    } else {
      console.log("Task cannot be empty");
    }
  }

  completeTodo(id: number): void {
    if (!id) {
      console.log("Task id cannot be empty");
      return;
    }
    const todoItem = this.todos.find((todo) => todo.id === id);

    if (todoItem) {
      if (todoItem?.completed === false) {
        todoItem.completed = true;
        console.log(`Task ${todoItem.text} completed`);
      } else {
        console.log("Task already completed");
      }
    } else {
      console.log("Task not found");
    }
  }

  removeTodo(id: number): void {
    if (!id) {
      console.log("Task id cannot be empty");
      return;
    }
    const todoItem = this.todos.find((todo) => todo.id === id);

    if (todoItem) {
      this.todos.splice(this.todos.indexOf(todoItem), 1);
      console.log(`Task ${todoItem.text} removed`);
    } else {
      console.log("Task not found");
    }
  }

  editTodo(id: number, task: string, dueDate?: string): void {
    if (!id) {
      console.log("Task id cannot be empty");
      return;
    }
    const todoItem = this.todos.find((todo) => todo.id === id);
    if (todoItem) {
      todoItem.text = task;
      if (dueDate) {
        //very basic check of a date format.
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(dueDate)) {
          todoItem.dueDate = "invalid date format";
        }
        todoItem.dueDate = dueDate;
      }
      console.log(`Task edited successfully}`);
    } else {
      console.log("Task not found");
    }
  }

  listTodos(): TodoItem[] {
    if (this.todos.length === 0) {
      console.log("No tasks found");
      return []; //if there is no task, return an empty array
    }
    return this.todos;
  }

  filterCompletedTodos(): TodoItem[] {
    if (this.todos.length === 0) {
      console.log("No tasks found");
      return []; //if there is no task, return an empty array
    }
    return this.todos.filter((todo) => todo.completed === true);
  }

  clearCompletedTodos(): void {
    const completedTodos = this.filterCompletedTodos();

    if (completedTodos.length > 0) {
      completedTodos.forEach((todo) => {
        console.log("Removing task: ", todo);
        this.todos.splice(this.todos.indexOf(todo), 1);
      });
    }
  }
}

const todoList = new TodoList();
todoList.addTodo("Buy milk");
todoList.addTodo("Buy eggs", "On March 3rd");
todoList.addTodo("Buy bread", "04/05/2025");
todoList.addTodo("Buy butter");
console.log();
console.log(todoList.listTodos());
todoList.completeTodo(1);
todoList.completeTodo(2);
todoList.clearCompletedTodos();
console.log();
console.log(todoList.listTodos());
todoList.addTodo("Buy cheese");
todoList.addTodo("Buy yogurt");
console.log();
console.log(todoList.listTodos());
todoList.editTodo(3, "Buy cheese");
console.log();
console.log(todoList.listTodos());
