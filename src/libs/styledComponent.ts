import { ComponentProps, ElementType, forwardRef } from "react";
import * as React from "react";
import cn from "classnames";
import { isEmpty } from "ramda";
import { AtomsFn } from "@vanilla-extract/sprinkles/createAtomsFn";

import { StyledComponentProps, StyledComponentReturn, StyledOptions, Styles } from "./styledComponent/types";
import { computeStyles } from "./styledComponent/libs";

export class StyledComponents<ATOMS> {
  private atoms: AtomsFn<[any]>;

  private constructor(atoms: any) {
    this.atoms = atoms;
  }

  public static configure<ATOMS extends AtomsFn<[any]>>(atoms: ATOMS) {
    return new StyledComponents<Parameters<ATOMS>[0]>(atoms);
  }

  createComponent<Component extends ElementType>(element: Component) {
    return <ConditionalProps>(
      computedStyles: Styles<ConditionalProps>,
      options?: StyledOptions,
    ): StyledComponentReturn<ComponentProps<typeof element>, ATOMS, ConditionalProps> => {
      const { atoms } = this;

      const StyledComponent = function (
        { className, children, styles = {}, ...props }: StyledComponentProps<ATOMS>,
        ref: React.ForwardedRef<any>,
      ) {
        const resultProps: any = {
          ...props,
          className: cn(computeStyles(computedStyles, props), atoms(styles), className),
        };

        if (ref && !isEmpty(ref)) resultProps.ref = resultProps;
        return React.createElement(element, resultProps, children);
      };

      if (options?.forwardRef) return React.memo(forwardRef(StyledComponent));

      return React.memo(StyledComponent);
    };
  }
}
