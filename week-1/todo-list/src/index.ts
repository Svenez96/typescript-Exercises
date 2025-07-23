//Aggiungere un Todo all'array
import { Todo, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

let nextTodoId = 1;
let nextUserId = 1

//Aggiunge un nuovo todo all'array
//Aggiunto il nuovo parametro (metadata) alla funzione
function addTodo(title: string, metadata: any) : Todo {
    const newTodo:Todo = {
        id: nextTodoId++,
        title,
        completed:false,
        metadata
    }
    todos.push(newTodo);
    return newTodo;
};



//Aggiunge un nuovo utente all'array
function addUser(name: string) : User {
    const newUser:User = {
        id: nextUserId++,
        name
    }
    users.push(newUser);
    return newUser;
};

//Associare Todo con Utenti
function assignTodoToUser(todoId: number, userId: number) : boolean {
    const todo = todos.find(t => t.id === todoId);

    if(!todo) {
        console.error(`Todo con ID ${todoId} non trovato.`);
        return false;
    }

    todo.userId = userId;
    return true;
}

//Ottenere i todo di un utente
function getUserTodos(userId: number) : Todo[] {
    return todos.filter(todo => todo.userId === userId)
}

//Gestione degli errori con never 
function manageError(message:string) : never{
    throw new Error(message);
};

//Gestione dei tipi dinamici con unknown
function parseInput(input:unknown) : string{
    if(typeof input === "string"){
        return input
    } if(typeof input === "number") {
        return input.toString()
    }    
    return manageError("Not supported type of input")
};

console.log(parseInput(20));





//aggiungere un utente
addUser("Domenico")
addUser("John Wick")
//aggiungere un todo * aggiunta una descrizione con il tag metadata *
addTodo("fare esercizi di typescript", { difficulty:"medium" })
addTodo("andare in palestra", { workout: "gambe" })
//assegnare il todo all'utente
assignTodoToUser(2, 1)
assignTodoToUser(1, 2)
//visualizzare i todo di un utente
getUserTodos(1)
getUserTodos(2)

console.log(users)
console.log(todos)




