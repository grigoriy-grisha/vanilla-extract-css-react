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
import Wrapper from "./primitives/Wrapper";

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
    <Wrapper>
      <Wrapper className={todoContainer}>
        <Wrapper className={todoTitle}>Title</Wrapper>
        <Input
          style={inputWidth}
          placeholder={"Placeholder"}
          value={value}
          onChange={setValue}
          error={error}
          success={success}
        />
        <TodoItems photos={photos} />
      </Wrapper>
      <Wrapper
        className={atoms({
          background: "white",
          padding: { desktop: "5x", mobile: "0x" },
          width: "containerWidth",
          marginy: "none",
          marginx: "auto",
          boxshadow: "elevation/16px",
          borderRadius: "0x",
          border: "default",
        })}
      >
        <Wrapper className={atoms({ fontFamily: "IBM_SEMI_BOLD" })}>Title</Wrapper>
        <InputAtomic
          style={inputWidth}
          placeholder={"Placeholder"}
          value={value}
          onChange={setValue}
          error={error}
          success={success}
        />
        <Wrapper className={atoms({ marginTop: "1x" })}>
          <TodoItemsAtomic photos={photos} />
        </Wrapper>
      </Wrapper>

      <Wrapper
        paddingBottom="0x"
        padding="2x"
        border="default"
        boxshadow="elevation/16px"
        width="containerWidth"
        marginx="auto"
        marginy={{
          desktop: "0x",
        }}
        className={todoContainer}
      >
        Wrapper
      </Wrapper>
    </Wrapper>
  );
};
