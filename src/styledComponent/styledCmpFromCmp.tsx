import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";
import cn from "classnames";

import { CmpFromCssType } from "./types";
import { StyledComponentProps } from "./StyledComponent";
import { computedStyle, sortStyles } from "./libs";

export function styledCmpFromCmp<ConditionalProps>(
  Component: ForwardRefExoticComponent<PropsWithoutRef<StyledComponentProps> & RefAttributes<unknown>>,
) {
  return (styles: Array<CmpFromCssType<ConditionalProps> | string>) => {
    const { classNames, stylesComponent } = sortStyles<ConditionalProps>(styles);

    return React.memo(({ className, ...props }: StyledComponentProps & ConditionalProps) => (
      <Component
        {...props}
        className={cn(
          classNames,
          stylesComponent?.length !== 0 ? computedStyle(stylesComponent as CmpFromCssType<{}>[], props) : "",
          className,
        )}
      />
    ));
  };
}
