import { ComponentProps, ElementType } from "react";
import * as React from "react";
import cn from "classnames";
import { AtomsFn } from "@vanilla-extract/sprinkles/createAtomsFn";

import {
  DomElementsInterface,
  StyledComponentProps,
  StyledComponentReturn,
  Styles
} from "./types";
import { computeStyles } from "./libs";
import { domElements } from "./domElements";

export function configureAtoms<ATOMS extends AtomsFn<[any]>>(atoms: ATOMS) {
  type AtomsType = Parameters<typeof atoms>[0];

  function createComponent<Component extends ElementType>(element: Component) {
    return <ConditionalProps>(
      ...computedStyles: Styles<ConditionalProps>
    ): StyledComponentReturn<
      ComponentProps<typeof element>,
      AtomsType,
      ConditionalProps
    > => {
      const VanillaStyledComponent = function ({
        className,
        children,
        styles = {},
        ...props
      }: StyledComponentProps<
        ComponentProps<typeof element> & AtomsType & ConditionalProps
      >) {
        const resultProps: any = {
          ...props,
          className: cn(
            computeStyles(computedStyles, props),
            atoms(styles),
            className
          )
        };

        return React.createElement(element, resultProps, children);
      };

      return React.memo(VanillaStyledComponent);
    };
  }

  const vanillaStyled = createComponent as typeof createComponent &
    DomElementsInterface<AtomsType>;

  domElements.forEach(
    domElement => (vanillaStyled[domElement] = vanillaStyled(domElement))
  );

  return vanillaStyled;
}
