export interface ReducerTypes {
  name: string;
  done: boolean;
  id: number;
}

export interface ActionType {
  type: "delete" | "finish" | "add";
  newTodoName: string;
  id?: number;
}
//type ReducerFunction = (state : ReducerTypes[], action : ActionType) => ReducerTypes[];

export const todosReducer = (
  state: ReducerTypes[],
  action: ActionType
): ReducerTypes[] => {
  if (action.type === "delete") {
    return state.filter((todo: ReducerTypes) => todo.id !== action.id);
  } else if (action.type === "finish") {
    return state.map((todo: ReducerTypes) => {
      if (todo.id !== action.id) {
        return todo;
      }
      return {
        ...todo,
        done: true,
      };
    });
  } else if (action.type === "add") {
    return [
      ...state,
      {
        name: action.newTodoName,
        done: false,
        id: Math.random(),
      },
    ];
  } else return [...state];
};
