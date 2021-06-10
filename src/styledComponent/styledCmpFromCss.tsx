import React from "react";
import cn from "classnames";

import { CmpFromCssType } from "./types";
import StyledComponent, { StyledComponentProps } from "./StyledComponent";
import { sortStyles } from "./libs";

export function styledCmpFromCss<ConditionalProps>(
  styles: Array<CmpFromCssType<ConditionalProps> | string>,
): React.NamedExoticComponent<StyledComponentProps & ConditionalProps> {
  const { classNames, stylesComponent } = sortStyles<ConditionalProps>(styles);

  return React.memo(({ className, ...props }) => (
    <StyledComponent {...props} stylesConditions={stylesComponent} className={cn(className, classNames)} />
  ));
}
