import * as React from "react";
import { useEffect, useState } from "react";

import Input from "./primitives/Input";

import { Photo, photoService } from "./services/PhotoService";

import { inputWidth } from "./styles/App.css";
import { todoContainer, todoTitle } from "./styles/todoContainer.css";
import { atoms } from "./styles/atomicGlobalStyles/globalAtomic.css";
import InputAtomic from "./primitives/InputAtomic";
import TodoItems from "./modules/TodoItems";
import TodoItemsAtomic from "./modules/TodoItemsAtomic";
import { styled } from "./styles/entryPointStyles";

//TODo нужен рефакторинг
//Todo подумать над реализацией как в styleComponents
const TodoContainer = styled.createComponent("div")([todoContainer]);
const TodoButton = styled.createComponent("button")([todoContainer]);
const TodoTitle = styled.createComponent(TodoButton)([todoTitle]);

const SuperLuxuryComponentInTheWorld = styled.createComponent("div")<{ success?: boolean; error?: boolean }>([
  ({ success }) => success && todoContainer,
  ({ error }) =>
    error &&
    atoms({
      background: "white",
      padding: { desktop: "5x", mobile: "0x" },
      width: "containerWidth",
      marginy: "none",
      marginx: "auto",
      boxshadow: "elevation/16px",
      borderRadius: "0x",
      border: "default",
    }),
]);

const TodoContainerAtomic = styled.createComponent("div")([
  atoms({
    background: "white",
    padding: { desktop: "5x", mobile: "0x" },
    width: "containerWidth",
    marginy: "none",
    marginx: "auto",
    boxshadow: "elevation/16px",
    borderRadius: "0x",
    border: "default",
  }),
]);

const TodoTitleAtomic = styled.createComponent("div")([atoms({ fontFamily: "IBM_SEMI_BOLD" })]);
const TodoItemsAtomicWrapper = styled.createComponent("div")([atoms({ marginTop: "1x" })]);

export const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  //TODO функционал не имеет значения
  useEffect(() => {
    photoService.getPhotos(5).then(setPhotos);
  }, []);

  useEffect(() => {
    if (value.length > 20) {
      setError(true);
      setSuccess(false);
      return;
    }

    if (value.length > 10) {
      setSuccess(true);
      setError(false);
      return;
    }

    setSuccess(false);
    setError(false);
  }, [value]);

  return (
    <div>
      <TodoContainer>
        <TodoTitle>Title</TodoTitle>
        <Input
          style={inputWidth}
          placeholder={"Placeholder"}
          value={value}
          onChange={setValue}
          error={error}
          success={success}
        />
        <TodoItems photos={photos} />
      </TodoContainer>
      {Array(10)
        .fill("")
        .map((_, index) => (
          <TodoContainerAtomic key={index}>
            <TodoTitleAtomic>Title</TodoTitleAtomic>
            <InputAtomic
              styles={{
                width: "containerWidth",
                marginy: "none",
                marginx: "auto",
                display: "block",
              }}
              placeholder={"Placeholder"}
              value={value}
              onChange={setValue}
              error={error}
              success={success}
            />
            <TodoItemsAtomicWrapper className={atoms({ marginTop: "1x" })}>
              <TodoItemsAtomic photos={photos} />
            </TodoItemsAtomicWrapper>
          </TodoContainerAtomic>
        ))}
      <TodoContainerAtomic>
        <TodoTitleAtomic>Title</TodoTitleAtomic>
        <InputAtomic
          styles={{
            width: "containerWidth",
            marginy: "none",
            marginx: "auto",
            display: "block",
          }}
          placeholder={"Placeholder"}
          value={value}
          onChange={setValue}
          error={error}
          success={success}
        />
        <TodoItemsAtomicWrapper className={atoms({ marginTop: "1x" })}>
          <TodoItemsAtomic photos={photos} />
        </TodoItemsAtomicWrapper>
      </TodoContainerAtomic>

      <SuperLuxuryComponentInTheWorld
        error={error}
        success={success}
        styles={{
          paddingBottom: "0x",
          padding: "2x",
          border: "default",
          boxshadow: "elevation/16px",
          width: "containerWidth",
          margin: "auto",
          marginy: {
            desktop: "0x",
          },
        }}
      >
        Wrapper
      </SuperLuxuryComponentInTheWorld>
    </div>
  );
};
