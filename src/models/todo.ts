export interface Todo {
    id: number
    name: string
    done: boolean
    priority: string
    due_date: string
}

export interface User {
    id: number
    name: string
}

export interface TodoFilters {
    level: string
    due_date: string
}