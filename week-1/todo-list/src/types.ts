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
    email?: string
} 

