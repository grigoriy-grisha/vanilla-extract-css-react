import * as React from "react";
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";
import cn from "classnames";

import { computeStyles } from "./libs";
import { StyledComponentProps, Styles } from "./types";

export function styledCmpFromCmp<ConditionalProps>(
  Component: ForwardRefExoticComponent<PropsWithoutRef<StyledComponentProps> & RefAttributes<unknown>>,
) {
  return (styles: Styles<ConditionalProps>) => {
    return React.memo(({ className, ...props }: StyledComponentProps & ConditionalProps) => (
      <Component {...props} className={cn(computeStyles(styles, props), className)} />
    ));
  };
}
