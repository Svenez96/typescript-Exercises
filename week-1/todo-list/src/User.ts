import { Todo } from "./types";

export class User {
    id: number;
    name: string;
    email?: string;
    private todos: Todo[] = [];

    constructor(id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // aggiungere un todo
    addTodo(todo: Todo): void {
        todo.userId = this.id;
        this.todos.push(todo);
    }

    // ottenere i todos dell'utente
    getTodos(): Todo[] {
        return this.todos;
    }
}