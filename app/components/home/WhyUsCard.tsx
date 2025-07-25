import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  image: string;
}

export default function WhyUsCard(props: Props) {
  return (
    <div className="p-4 flex flex-col items-center gap-4 text-center">
      <img
        src={props.image}
        className="max-w-1/2"
        height="200"
        width="200"
        alt=""
      />

      <h2 className="uppercase heading-3">{props.title}</h2>
      {props.children}
    </div>
  );
}
