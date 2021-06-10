import * as React from "react";
import { forwardRef } from "react";
import cn from "classnames";

//TODO откуда конфигурировать глоабльные atoms?
import { computedStyle } from "../libs";
import { CmpFromCssType } from "../types";
import { atoms } from "../../../styles/atomicGlobalStyles/globalAtomic.css";

export type StyledComponentProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  styles?: Parameters<typeof atoms>[0];
  [key: string]: any;
};

export function styledComponent<ConditionalProps>(
  stylesConditions: CmpFromCssType<ConditionalProps>[],
  classNames: string[],
) {
  const StyledComponent = forwardRef(function (
    { as: Element = "div", className, children, styles = {}, ...props }: StyledComponentProps,
    ref: any,
  ) {
    return (
      // @ts-ignore
      <Element
        // @ts-ignore
        {...props}
        className={cn(
          atoms(styles),
          className,
          stylesConditions?.length !== 0 ? computedStyle<ConditionalProps>(stylesConditions!, props) : "",
          classNames,
        )}
        ref={ref}
      >
        {children}
      </Element>
    );
  });

  return React.memo(StyledComponent);
}
