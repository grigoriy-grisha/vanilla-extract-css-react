import * as React from "react";
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";

import { Styles } from "./types";
import { StyledComponentProps } from "./styledComponent";
import { sortStyles } from "./libs";
import styledHoComponent from "./StyledHoComponent";

export function styledCmpFromCmp<ConditionalProps>(
  Component: ForwardRefExoticComponent<PropsWithoutRef<StyledComponentProps> & RefAttributes<unknown>>,
) {
  return (styles: Styles<ConditionalProps>) => {
    const { classNames, stylesConditions } = sortStyles<ConditionalProps>(styles);

    return styledHoComponent(Component, classNames, stylesConditions);
  };
}
