import { todoItemsContainer } from "../../styles/App.css";
import TodoItem from "../../primitives/TodoItem";
import { randomService } from "../../services/RandomService";
import * as React from "react";
import { Photo } from "../../services/PhotoService";
import Wrapper from "../../primitives/Wrapper";

interface TodoItemsInterface {
  photos: Photo[];
}
function TodoItems({ photos }: TodoItemsInterface) {
  return (
    <Wrapper className={todoItemsContainer}>
      {photos.map(({ id, title }) => (
        <TodoItem key={id} text={title} checked={randomService.getRandomBoolean()} />
      ))}
    </Wrapper>
  );
}

export default React.memo(TodoItems);
