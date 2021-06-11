import * as React from "react";

import { todoItemsContainer } from "../../styles/App.css";

import { randomService } from "../../services/RandomService";
import { Photo } from "../../services/PhotoService";
import { checkedStyles, todoItemStyles } from "../../primitives/TodoItem/styles/todoItemStyles.css";
import { styledComponent } from "../../libs/styledComponent/styledComponent";

interface TodoItemsAtomicInterface {
  photos: Photo[];
}

const TodoItemsContainer = styledComponent("div")([todoItemsContainer]);
const TodoItem = styledComponent<{ checked: boolean }>("div")([
  ({ checked }) => checked && checkedStyles,
  todoItemStyles,
]);

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
