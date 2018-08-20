import * as React from 'react';
import { ITodoItem } from '../type/todoItem';
import { TodoItem } from './todoItem';

interface ITodoListRendererProps {
  items: ITodoItem[];
  todoProps: any;
}

export const TodoListRenderer: React.SFC<ITodoListRendererProps> = (props: ITodoListRendererProps) => {
  const { items, ...todoProps } = props
  if (!items.length) {
    return null;
  }

  return (
    <section className="main" >
      <ul className="todo-list">
        {items.map(todo => <TodoItem {...todoProps} todo={todo} key={todo.id} />)}
      </ul>
    </section>
  );
}
