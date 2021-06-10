import React, { forwardRef } from "react";
import cn from "classnames";

//TODO откуда конфигурировать глоабльные atoms?
import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";
import { computedStyle } from "../libs";

export type StyledComponentProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  styles?: Parameters<typeof atoms>[0];
  [key: string]: any;
};

const StyledComponent = forwardRef(function (
  { as: Element = "div", className, children, stylesConditions = [], styles = {}, ...props }: StyledComponentProps,
  ref: any,
) {
  return (
    <Element
      // @ts-ignore
      {...props}
      className={cn(
        atoms(styles),
        className,
        stylesConditions?.length !== 0 ? computedStyle(stylesConditions!, props) : "",
      )}
      ref={ref}
    >
      {children}
    </Element>
  );
});

export default React.memo(StyledComponent);
