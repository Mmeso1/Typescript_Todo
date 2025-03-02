# Typescript_Todo

This is a Learnable task that uses Typescript to implement a Todo list application

## To run the file:

1. First compile the todo.tsx file by running

```bash
tsc
```

2. After then, confirm you have a version of node abover 14 by running

```bash
node -v
```

3. After this, run the javascript file with

```bash
node todo.js
```

## Tips

- When running the file, the format for setting dueDate is:

```
dd/mm/yyyy
```

for example:

```
04/05/2025
```

- dueDate is an optional paramter, so you must not include it when creating a new list. But if not included, the value will be set to not set.
  Also, if an incorrect format is entered which is checked using regex, the value will be set to incorrect date format.
  Do not worry, you can fix this by editing the task using the editTodo function by entering the id of the task, the task and dueDate.
  If you want to edit only task, you do not need to set dueDate but id of the task and the task is compulsory.
  To confirm, you can run listTodo function.

## Functions:

Although the function names represent clearly what they are meant for, this is a guide:

- addTodo(task: string, dueDate?: string):
  This is used to add a new todo item to the Todo class. The arguments are task which is compulsory, dueDate is optional.
- completeTodo(id: number):
  This is used to mark a task as completed. The argument is the id of the task you want to mark as completed. It sets its value from false to true.
- removeTodo(id: number):
  This is used to remove a todo item from the todo list. Its argument is the id of the task you want to remove.
- editTodo(id: number, task: string, dueDate?: string):
  This is used to edit a particular task. Its arguments are the id which is compulsory, the task you want to edit which is also compulsory and then the dueDate which is optional.
- listTodos():
  This is used to list all the todo items in the todo list. It does not take any argument.
- filterCompletedTodos():
  This is used to filter the completed tasks that their value is true. It does not take any argument.
- clearCompletedTodos():
  This is used to clear all the completed todo items from the todo list.
