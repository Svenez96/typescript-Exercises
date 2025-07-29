//Aggiungere un Todo all'array
import { Todo, TodoStatus, Project, User } from "./types";

const todos: Todo[] = [];
const users: User[] = [];

let nextTodoId = 1;
let nextUserId = 1

function addTodo(title: string, metadata?: string | object) : Todo {
    const newTodo:Todo = {
        id: nextTodoId++,
        title,
        completed:false,
        metadata,
        // Aggiungere stati ai todo
        status: TodoStatus.Pending
    }
    todos.push(newTodo);
    return newTodo;
};

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

// funzione per aggiornare lo stato del todo
function updatedTodoStatus(todoId: number, status: TodoStatus): Todo | undefined {
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        console.error(`Todo with ID ${todoId} not found.`);
        return;
    }

    todo.status = status;
    return todo;
}

function addUser(name: string) : User {
    const newUser:User = {
        id: nextUserId++,
        name,
        todos: []
    }
    users.push(newUser);
    return newUser;
};

function assignTodoToUser(todoId: number, userId: number) : boolean {
    const todo = todos.find(t => t.id === todoId);
    const user = users.find(u => u.id === userId);

    if(!todo) {
        console.error(`Todo con ID ${todoId} non trovato.`);
        return false;
    }

    todo.userId = userId;

    return true;
}

function getUserTodos(userId: number) : Todo[] {
    return todos.filter(todo => todo.userId === userId)
}

function manageError(message?:string) : never{
    throw new Error(message);
};

function parseInput(input:unknown) : string{
    if(typeof input === "string"){
        return input
    } if(typeof input === "number") {
        return input.toString()
    }    
    return manageError("Not supported type of input")
};

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


addUser("Domenico")
addUser("John Wick")
addTodo("fare esercizi di typescript", { difficulty:"easy" })
addTodo("andare in palestra", { workout: "gambe" })
assignTodoToUser(2, 1)
assignTodoToUser(1, 2)
updateTodo(1, {
    title: "Finire gli esercizi di typescript della settimana",
    completed: true
})
getUserTodos(1)
getUserTodos(2)

// console.log("Todos aggiornati:", todos);
// console.log("Todos per utente 1:", getUserTodos(1));
// console.log("Todos per utente 2:", getUserTodos(2));
// console.log(parseInput("ciao"));
// console.log("Riepilogo del Todo 1:",getTodoSummary(1));

console.log(updatedTodoStatus(1, TodoStatus.Pending));




