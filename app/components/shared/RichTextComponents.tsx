import react from "react";
import type { Components } from "tinacms/dist/rich-text";

type ComponentsType = Components<{
  [x: string]: (props: react.PropsWithChildren) => react.JSX.Element;
}>;

export const richTextComponents: ComponentsType = {
  h1: (props) => <h1 className="heading-1">{props?.children}</h1>,
  h2: (props) => <h2 className="heading-2 mb-6">{props?.children}</h2>,
};
