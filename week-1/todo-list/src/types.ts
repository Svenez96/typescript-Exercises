export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    metadata?: any,
    status: TodoStatus
} 

// Utilizzare Enum per gli stati dei Todo
export enum TodoStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed"
}

export interface User {
    id: number,
    name: string,
    email?: string,
    readonly todos: Todo[];
} 

export interface TodoWithMetadata extends Todo {
    metadata: any
}

export interface Project {
    name: string;
    users: User[];
    todos: Todo[];
}
