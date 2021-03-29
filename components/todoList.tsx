import React from 'react';
import { observer, inject } from 'mobx-react';
import { Todo } from '../intefaces';

const TodoList = (props: any): JSX.Element => {
  const { store } = props;
  return (
    <>
      <h1>TodoList</h1>
      {
        store.todos && store.todos.length > 0 && store.todos.map(({ id, todo, done }: Todo) => 
          {
            return (
              <div key={id}>
              <ul>
                <input type="checkbox" onClick={() => done = !done}/>
                <li><input type="text" value={todo} onChange={(e) => todo = e.target.value}/></li>
                <li><button onClick={() => store.removeTodo(id)}>Delete</button></li>
              </ul>
              </div>
            )
          }
        )
      }
    </>
  );
}

export default inject('store')(observer(TodoList));
