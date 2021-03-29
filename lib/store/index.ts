import * as mobx from "mobx";
import { action, observable, decorate } from 'mobx';

mobx.configure({ enforceActions: 'observed' });

class Store {
  public counter: number;

  constructor(counter: number) {
    this.counter = counter
  }

  public increment() {
    this.counter++;
  }

  public decrement() {
    this.counter--;
  }
}
decorate(Store, {
  counter: observable,

  increment: action,
  decrement: action,

});

const store = new Store(0);

export default store;