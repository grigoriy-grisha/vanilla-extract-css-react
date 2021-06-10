import * as React from "react";
import cn from "classnames";
import { computedStyle } from "../libs";
import { CmpFromCssType } from "../types";
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";
import { StyledComponentProps } from "../StyledComponent";

function styledHoComponent<ConditionalProps>(
  Component: ForwardRefExoticComponent<PropsWithoutRef<StyledComponentProps> & RefAttributes<unknown>>,
  classNames: string[],
  stylesConditions: CmpFromCssType<ConditionalProps>[],
) {
  return React.memo(({ className, ...props }: StyledComponentProps & ConditionalProps) => (
    <Component
      {...props}
      className={cn(
        classNames,
        stylesConditions?.length !== 0
          ? computedStyle(stylesConditions as CmpFromCssType<ConditionalProps>[], props)
          : "",
        className,
      )}
    />
  ));
}

export default styledHoComponent;
