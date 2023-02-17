import {Todo} from '../../app/types/todo.type';

export namespace TodoActions {
  export class FetchAll {
    static readonly type = '[Tweet] Get Todos';

    constructor(public todos: Todo[]) {
    }
  }

  export class Add {
    static readonly type = '[Tweet] Add Todo';

    constructor(public todo: Todo) {
    }
  }

  export class Remove {
    static readonly type = '[Tweet] Remove Todo';

    constructor(public todoId: number) {
    }
  }

  export class Pin {
    static readonly type = '[Tweet] Pin Todo';

    constructor(public todoId: number) {
    }
  }
}
