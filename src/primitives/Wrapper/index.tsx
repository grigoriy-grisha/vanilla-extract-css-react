import React, { forwardRef } from "react";

import { atoms } from "../../styles/atomicGlobalStyles/globalAtomic.css";
import { composeClassNames } from "../../styles/libsStyles/composeClassNames";

type BoxProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
} & Parameters<typeof atoms>[0];

const Wrapper = forwardRef(function ({ as: Element = "div", className, children, ...props }: BoxProps, ref) {
  const otherProps = {} as any;
  const atomicProps = {} as any;

  Object.entries(props).forEach(([key, value]) => {
    if (atoms.properties.has(key as any)) {
      atomicProps[key] = value;
      return;
    }

    otherProps[key] = value;
  });

  return (
    // @ts-ignore
    <Element
      // @ts-ignore
      {...otherProps}
      className={composeClassNames(className ?? "", atoms(atomicProps))}
      ref={ref}
    >
      {children}
    </Element>
  );
});

export default React.memo(Wrapper);
