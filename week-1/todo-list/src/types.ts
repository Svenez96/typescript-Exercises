export interface Todo {
    id: number,
    title: string,
    completed: boolean
    userId?: number
    //Utilizzare il tipo Any
    metadata?: any
} 

export interface User {
    id: number,
    name: string,
    email?: string,
    todos?: ReadonlyArray<Todo>
} 

export interface TodoWithMetadata extends Todo {
    metadata: any
}

export interface Project {
    name: string;
    users: User[];
    todos: Todo[];
}
