import { forwardRef, ForwardRefExoticComponent, MemoExoticComponent, NamedExoticComponent } from "react";
import { StyledComponentProps, StyledOptions, Styles } from "./styledComponent/types";
import * as React from "react";
import cn from "classnames";
import { computeStyles } from "./styledComponent/libs";
import { isEmpty } from "ramda";
import { AtomsFn } from "@vanilla-extract/sprinkles/createAtomsFn";

export class StyledComponents<ATOMS> {
  private atoms: AtomsFn<[any]>;
  private constructor(atoms: any) {
    this.atoms = atoms;
  }
  public static configure<ATOMS extends AtomsFn<[any]>>(atoms: ATOMS) {
    return new StyledComponents<Parameters<ATOMS>[0]>(atoms);
  }

  createComponent<ConditionalProps>(
    element:
      | keyof JSX.IntrinsicElements
      | NamedExoticComponent
      | MemoExoticComponent<any>
      | ForwardRefExoticComponent<any> = "div",
  ) {
    return (
      computedStyles: Styles<ConditionalProps>,
      options?: StyledOptions,
    ): React.NamedExoticComponent<StyledComponentProps & ConditionalProps> => {
      const { atoms } = this;

      const StyledComponent = function (
        { className, children, styles = {}, ...props }: StyledComponentProps,
        ref: React.ForwardedRef<unknown>,
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
