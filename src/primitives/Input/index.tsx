import * as React from "react";
import { ChangeEvent, useCallback } from "react";
import { inputDefaultStyles, inputErrorStyles, inputSuccessStyles } from "./styles/inputStyles.css";
import { composeClassNames } from "../../styles/libsStyles/composeClassNames";

interface InputInterface {
  placeholder?: string;
  style?: string;
  error?: boolean;
  success?: boolean;
  value: string;
  onChange: (value: string) => void;
}

function Input({ placeholder, style = "", value, error = false, success = false, onChange }: InputInterface) {
  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, []);

  return (
    <input
      type="text"
      className={composeClassNames(
        inputDefaultStyles,
        error ? inputErrorStyles : "",
        success ? inputSuccessStyles : "",
        style,
      )}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
}

export default React.memo(Input);
