import * as React from "react";
import { ChangeEvent, useCallback } from "react";

import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";
import { inputDynamicStyles, inputErrorDynamicStyles, inputSuccessDynamicStyles } from "./styles/inputStyles.css";
import { styledCmpFromCss } from "../../libs/styledComponent/styledCmpFromCss";

interface InputAtomicInterface {
  placeholder?: string;
  styles?: Parameters<typeof atoms>[0];
  error?: boolean;
  success?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const StyledInput = styledCmpFromCss<{ error?: boolean; success?: boolean }>([
  [({ error }) => !!error, inputErrorDynamicStyles],
  [({ success }) => !!success, inputSuccessDynamicStyles],
  inputDynamicStyles,
]);

function InputAtomic({ placeholder, styles, value, error = false, success = false, onChange }: InputAtomicInterface) {
  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, []);

  return (
    <StyledInput
      as="input"
      type="text"
      className={atoms({
        padding: "2x",
        background: "gray-blue/01-50%",
        outline: "none",
        border: "default",
        borderRadius: "0x",
      })}
      styles={styles}
      error={error}
      success={success}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
}

export default React.memo(InputAtomic);
