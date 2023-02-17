import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {Todo} from "../../app/types/todo.type";
import {TodoActions} from "./actions";
import FetchAll = TodoActions.FetchAll;
import Add = TodoActions.Add;
import Remove = TodoActions.Remove;
import Pin = TodoActions.Pin;

@State<Todo[]>({
  name: 'todos',
  defaults: []
})
@Injectable()
export class TodoState {
  @Action(FetchAll)
  getTodos({setState}: StateContext<Todo[]>, action: FetchAll): void {
    setState([...action.todos]);
  }

  @Action(Add)
  addTodo({setState, getState}: StateContext<Todo[]>, action: Add): void {
    setState([...getState(), action.todo]);
  }

  @Action(Remove)
  removeTodo({setState, getState}: StateContext<Todo[]>, action: Remove): void {
    setState([...getState().filter(todo => todo.id !== action.todoId)]);
  }

  @Action(Pin)
  pinTodo({setState, getState}: StateContext<Todo[]>, action: Pin): void {
    setState(
      [...getState().map(todo => todo.id === action.todoId ? {...todo, pinned: !todo.pinned} : todo)]
    );
  }
}
