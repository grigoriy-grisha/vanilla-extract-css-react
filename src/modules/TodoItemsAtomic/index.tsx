import * as React from "react";

import { todoItemsContainer } from "../../styles/App.css";

import { randomService } from "../../services/RandomService";
import { Photo } from "../../services/PhotoService";
import {
  checkedStyles,
  todoItemStyles
} from "../../primitives/TodoItem/styles/todoItemStyles.css";
import { vanillaStyled } from "../../styles/entryPointStyles";

interface TodoItemsAtomicInterface {
  photos: Photo[];
}

const TodoItemsContainer = vanillaStyled.div(todoItemsContainer);
const TodoItem = vanillaStyled.div<{ checked: boolean }>(
  ({ checked }) => checked && checkedStyles,
  todoItemStyles
);

function TodoItemsAtomic({ photos }: TodoItemsAtomicInterface) {
  return (
    <TodoItemsContainer>
      {photos.map(({ id, title }) => (
        <TodoItem key={id} checked={randomService.getRandomBoolean()}>
          {title}
        </TodoItem>
      ))}
    </TodoItemsContainer>
  );
}

export default React.memo(TodoItemsAtomic);
