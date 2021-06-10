import * as React from "react";
import { ChangeEvent, useCallback } from "react";

import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";
import { inputDynamicStyles, inputErrorDynamicStyles, inputSuccessDynamicStyles } from "./styles/inputStyles.css";
import { composeClassNames } from "../../styles/libsStyles/composeClassNames";

interface InputAtomicInterface {
  placeholder?: string;
  style?: string;
  error?: boolean;
  success?: boolean;
  value: string;
  onChange: (value: string) => void;
}
const errorStyles = composeClassNames(atoms({ border: "error" }), inputErrorDynamicStyles);
const successStyles = composeClassNames(atoms({ border: "success" }), inputSuccessDynamicStyles);

function InputAtomic({ placeholder, style, value, error = false, success = false, onChange }: InputAtomicInterface) {
  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, []);

  return (
    <input
      type="text"
      className={composeClassNames(
        atoms({
          padding: "2x",
          background: "gray-blue/01-50%",
          outline: "none",
          border: "default",
          borderRadius: "0x",
        }),
        inputDynamicStyles,
        error ? errorStyles : "",
        success ? successStyles : "",
        style ?? "",
      )}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
}

export default React.memo(InputAtomic);
