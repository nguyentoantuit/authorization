import * as React from 'react';
import todoStorage from '../service/todoService';
import { TodoItem } from './todoItem';
import { TodoListRenderer } from './todoListRenderer';
import { NewTodo } from './newTodo';
import { ITodoItem } from '../type/todoItem';

interface IToDoListProps {

}

interface IToDoListState {
    items: ITodoItem[];
}

export class ToDoList extends React.Component<IToDoListProps, IToDoListState> {
    constructor(props: IToDoListProps, context: any) {
        super(props, context);
    }

    private addTodo(attrs: { title: string, assignee: string }) {
        const todo: ITodoItem = todoStorage.build(attrs)
        let state = { ...this.state };
        state.items = state.items.concat(todo);
        this.setState(state);
    }

    render() {
        return (
            <div>
                <header className="header">
                    <h1>Todos</h1>
                    <NewTodo onNewTodo={this.addTodo.bind(this)} />
                </header>
                <TodoListRenderer
                    items={[]}
                    todoProps={null}
                />
            </div>
        );
    }
}
