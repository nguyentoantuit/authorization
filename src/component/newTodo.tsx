import * as React from 'react';
import { ITodoItem } from '../type/todoItem';

interface INewTodoProps {
    onNewTodo: (todo:ITodoItem) => void;
}


interface INewTodoState {

}

export class NewTodo extends React.Component<INewTodoProps, INewTodoState> {
    constructor(props: INewTodoProps) {
        super(props);


    }

    render() {
        return (
            <div>
            </div>
        );
    }

}