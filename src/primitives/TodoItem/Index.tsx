import * as React from "react";
import { checkedStyles, todoItemStyles } from "./styles/todoItemStyles.css";
import Wrapper from "../Wrapper";

interface TodoItemInterface {
  text?: string;
  checked?: boolean;
}

function TodoItem({ text, checked }: TodoItemInterface) {
  return <Wrapper className={`${todoItemStyles} ${checked ? checkedStyles : ""}`}>{text}</Wrapper>;
}

export default React.memo(TodoItem);
