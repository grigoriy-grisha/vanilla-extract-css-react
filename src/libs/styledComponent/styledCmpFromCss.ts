import * as React from "react";

import { Styles } from "./types";
import { StyledComponentProps, styledComponent } from "./styledComponent";
import { sortStyles } from "./libs";

export function styledCmpFromCss<ConditionalProps>(
  styles: Styles<ConditionalProps>,
): React.NamedExoticComponent<StyledComponentProps & ConditionalProps> {
  const { classNames, stylesConditions } = sortStyles<ConditionalProps>(styles);

  return styledComponent<ConditionalProps>(stylesConditions, classNames);
}
