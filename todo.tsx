interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

class TodoList {
  private todos: TodoItem[];
  private todoId: number;

  constructor() {
    this.todos = []; //I want to initialize a new array evrytime a new instance of TodoList is created
    this.todoId = 1; //I want to initialize a new id everytime a new instance of TodoList is created
  }

  addTodo(task: string): void {
    if (task) {
      this.todos.push({
        id: this.todoId++,
        text: task,
        completed: false,
      });
    } else {
      console.log("Task cannot be empty");
    }
  }

  completeTodo(id: number): void {
    const todoItem = this.todos.find((todo) => todo.id === id);

    if (todoItem) {
      if (todoItem?.completed === false) {
        todoItem.completed = true;
      } else {
        console.log("Task already completed");
      }
    } else {
      console.log("Task not found");
    }
  }

  removeTodo(id: number): void {
    const todoItem = this.todos.find((todo) => todo.id === id);

    if (todoItem) {
      this.todos.splice(this.todos.indexOf(todoItem), 1);
    } else {
      console.log("Task not found");
    }
  }

  listTodos(): TodoItem[] {
    if (this.todos.length === 0) {
      console.log("No tasks found");
    }
    return this.todos;
  }

  filterCompletedTodos(): TodoItem[] {
    return this.todos.filter((todo) => todo.completed === true);
  }
}
