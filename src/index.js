import './styles.css';

import { TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log(todoList.todos);