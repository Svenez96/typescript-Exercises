//Aggiungere un Todo all'array
import { Todo, TodoWithMetadata, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

let nextTodoId = 1;
let nextUserId = 1

/* Aggiunge un nuovo todo all'array
* Utilizzare il tipo Any *
function addTodo(title: string, metadata?: any) : Todo {
    const newTodo:Todo = {
        id: nextTodoId++,
        title,
        completed:false,
        metadata
    }
    todos.push(newTodo);
    return newTodo;
};
// * Creare tipi derivati con extends *
function addTodo(title: string, metadata: any) : TodoWithMetadata {
    const newTodo:TodoWithMetadata = {
        id: nextTodoId++,
        title,
        completed:false,
        metadata
    }
    todos.push(newTodo);
    return newTodo;
};

// * Utilizzare tipi Union */
function addTodo(title: string, metadata?: string | object) : Todo {
    const newTodo:Todo = {
        id: nextTodoId++,
        title,
        completed:false,
        metadata
    }
    todos.push(newTodo);
    return newTodo;
};

// * Utilizzare Tipi Utility *
function updateTodo(todoId: number, fieldsToUpdate: Partial<Todo>) : Todo | undefined {
    const index = todos.findIndex(t => t.id === todoId);

    if(index === -1) {
        console.error(`Todo with ID ${todoId} not found.`);
        return;
    }

    const updatedTodo = {
        ...todos[index],
        ...fieldsToUpdate
    };

    todos[index] = updatedTodo;
    return updatedTodo;
}

// * Aggiunge un nuovo utente all'array *
function addUser(name: string) : User {
    const newUser:User = {
        id: nextUserId++,
        name
    }
    users.push(newUser);
    return newUser;
};

// * Associare Todo con Utenti *
function assignTodoToUser(todoId: number, userId: number) : boolean {
    const todo = todos.find(t => t.id === todoId);

    if(!todo) {
        console.error(`Todo con ID ${todoId} non trovato.`);
        return false;
    }

    todo.userId = userId;
    return true;
}

// * Ottenere i todo di un utente *
function getUserTodos(userId: number) : Todo[] {
    return todos.filter(todo => todo.userId === userId)
}

// * Gestione degli errori con never * 
function manageError(message?:string) : never{
    throw new Error(message);
};

// * Gestione dei tipi dinamici con unknown *
function parseInput(input:unknown) : string{
    if(typeof input === "string"){
        return input
    } if(typeof input === "number") {
        return input.toString()
    }    
    return manageError("Not supported type of input")
};

// * Utilizzare tuple *
function getTodoSummary(todoId: number) : [string, boolean] | undefined {
    const todo = todos.find(t => t.id === todoId)

    if (!todo) {
        console.error(`Todo con ID ${todoId} non trovato.`)
        return
    }

    return [ todo.title, todo.completed ]
}

// * Finalizzare il Progetto *
function createProject(name: string, users: User [], todos: Todo []): Project {
    return {
        name,
        users,
        todos
    };
}

// const users: User[] = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
//   ];
  
// const todos: Todo[] = [
//     { id: 1, title: "Setup ambiente", completed: false, userId: 1 },
//     { id: 2, title: "Scrivere codice", completed: false, userId: 2 }
//   ];
  
// const myProject = createProject("Progetto TypeScript", users, todos);
//   console.log(myProject);


//aggiungere un utente
addUser("Domenico")
addUser("John Wick")
//aggiungere un todo * aggiunta una descrizione con il tag metadata *
addTodo("fare esercizi di typescript", { difficulty:"easy" })
addTodo("andare in palestra", { workout: "gambe" })
//assegnare il todo all'utente
assignTodoToUser(2, 1)
assignTodoToUser(1, 2)
//aggiornare il todo
updateTodo(1, {
    title: "Finire gli esercizi di typescript della settimana",
    completed: true
})
//visualizzare i todo di un utente
getUserTodos(1)
getUserTodos(2)

console.log("Todos aggiornati:", todos);
console.log("Todos per utente 1:", getUserTodos(1));
console.log("Todos per utente 2:", getUserTodos(2));
console.log(parseInput("ciao"));
console.log("Riepilogo del Todo 1:",getTodoSummary(1));





