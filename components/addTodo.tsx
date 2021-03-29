import React from 'react';
import { observer, inject } from 'mobx-react';

const AddTodo = (props: any): JSX.Element => {
  const { store } = props;
  return (
    <>
      <h1>AddTodo</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        store.addTodo()
      }}>
        <input placeholder="Add Todo" required value={store.todo} onChange={(event) => store.setTodo(event.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default inject('store')(observer(AddTodo));
