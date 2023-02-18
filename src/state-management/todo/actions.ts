import {Todo} from '../../app/types/todo.type';

export namespace TodoActions {
  export class FetchAll {
    static readonly type = '[Todo] Get Todos';

    constructor(public todos: Todo[]) {
    }
  }

  export class Add {
    static readonly type = '[Todo] Add Todo';

    constructor(public todo: Todo) {
    }
  }

  export class Remove {
    static readonly type = '[Todo] Remove Todo';

    constructor(public todoId: number) {
    }
  }

  export class Pin {
    static readonly type = '[Todo] Pin Todo';

    constructor(public todoId: number) {
    }
  }
}
