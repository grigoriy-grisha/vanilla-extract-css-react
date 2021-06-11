import * as React from "react";
import {
  AllHTMLAttributes,
  ComponentProps,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  NamedExoticComponent,
} from "react";
import cn from "classnames";

import { computeStyles } from "./libs";
import { StyledComponentProps, StyledComponentPropsWithoutAllHtmlAttributes, Styles } from "./types";

export function styledComponentFromComponent<
  ConditionalProps,
  Comp extends NamedExoticComponent | MemoExoticComponent<any> | ForwardRefExoticComponent<any>
>(Component: Comp) {
  return (styles: Styles<ConditionalProps>) => {
    return React.memo(
      ({
        className,
        ...props
      }: ComponentProps<typeof Component> & StyledComponentPropsWithoutAllHtmlAttributes & ConditionalProps) => (
        // @ts-ignore
        <Component {...props} className={cn(computeStyles(styles, props), className)} />
      ),
    );
  };
}
