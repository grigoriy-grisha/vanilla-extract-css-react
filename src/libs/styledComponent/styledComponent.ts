import * as React from "react";
import { forwardRef } from "react";
import cn from "classnames";
import { isEmpty } from "ramda";

import { StyledComponentProps, StyledOptions, Styles } from "./types";
import { computeStyles } from "./libs";
import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";

//TODo переписать, сложно
export function styledComponent<ConditionalProps>(element: keyof JSX.IntrinsicElements = "div") {
  return (
    computedStyles: Styles<ConditionalProps>,
    options?: StyledOptions,
  ): React.NamedExoticComponent<StyledComponentProps & ConditionalProps> => {
    const StyledComponent = function (
      { as = element, className, children, styles = {}, ...props }: StyledComponentProps,
      ref: React.ForwardedRef<unknown>,
    ) {
      const resultProps: any = {
        ...props,
        className: cn(computeStyles(computedStyles, props), atoms(styles), className),
      };

      if (ref && isEmpty(ref)) resultProps.ref = resultProps;
      console.log(children);
      return React.createElement(as, resultProps, children);
    };

    if (options?.forwardRef) return React.memo(forwardRef(StyledComponent));

    return React.memo(StyledComponent);
  };
}
