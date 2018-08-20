export interface ITodoItem {
    id: number;
    title: string;
    completed: boolean;
    __type: string,
    assignee?: string;
}