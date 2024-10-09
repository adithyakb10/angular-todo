export interface TodoProps{
    heading: string;
    note: string;
    taskDone: boolean;
    toggleDone: () => void
}