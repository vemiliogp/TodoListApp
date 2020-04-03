export class Todo {
    static fromJson({ id, tarea, completado, creado }) {
        const temptTodo = new Todo(tarea);

        temptTodo, id = id;
        temptTodo.completado = completado;
        temptTodo.creado = creado;

        return temptTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}