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

import { styledCmpFromCss } from "./styledComponent/styledCmpFromCss";
import { styledCmpFromCmp } from "./styledComponent/styledCmpFromCmp";

const SuperLuxuryComponentInTheWorld = styledCmpFromCss<{ success?: boolean; error?: boolean }>([
  [({ success }) => !!success, todoContainer],
  [
    ({ error }) => !!error,
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
  ],
]);

const TodoContainer = styledCmpFromCss([todoContainer]);
const TodoTitle = styledCmpFromCss([todoTitle]);
const TodoTitleRed = styledCmpFromCmp(TodoTitle)([atoms({ color: "red/04" })]);

const TodoContainerAtomic = styledCmpFromCss([
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

const TodoTitleAtomic = styledCmpFromCss([atoms({ fontFamily: "IBM_SEMI_BOLD" })]);
const TodoItemsAtomicWrapper = styledCmpFromCss([atoms({ marginTop: "1x" })]);
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
        <TodoTitleRed
          // as="h2"
          className={atoms({ color: "red/04" })}
          styles={{
            padding: "5x",
          }}
        >
          Title
        </TodoTitleRed>
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
      <TodoContainerAtomic>
        <TodoTitleAtomic>Title</TodoTitleAtomic>
        <InputAtomic
          style={inputWidth}
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
        success={success}
        error={error}
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
