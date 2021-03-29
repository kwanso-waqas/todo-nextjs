import * as mobx from "mobx";
import { action, observable, decorate } from 'mobx';
import { Todo } from "../../intefaces";

mobx.configure({ enforceActions: 'observed' });

class TodoStore {
  public todos: Todo[] = [];
  public todo: string = '';

  // constructor(todo: string) {
  //   this.todo = todo
  // }

  public addTodo() {
    this.todos = this.add(this.todos, this.todo);
    this.todo = "";
  }

  public removeTodo(id: number) {
    this.todos = this.remove(this.todos, id);
  }

  private add = (todos: Todo[], todo: string): Todo[] => [...todos, { 
    id: Math.max(0, Math.max(...todos.map(({id}) => id))) + 1,
    todo,
    done: false
  }];

  private remove = (todos: Todo[], id: number): Todo[] => todos.filter((todo: Todo) => todo.id !== id);

  public setTodo(value: string) {
    this.todo = value;
  }

  // public setDone(value: boolean) {
  //   this.todo.done = !value;
  // }
}
decorate(TodoStore, {
  todo: observable,
  todos: observable,

  addTodo: action,
  setTodo: action,
  removeTodo: action,

});

const todoStore = new TodoStore();
console.log(todoStore.todos)


export default todoStore;