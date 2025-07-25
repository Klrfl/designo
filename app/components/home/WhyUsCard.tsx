import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  image: string;
}

export default function WhyUsCard(props: Props) {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <img src={props.image} className="max-w-1/2" alt="" />

      <h2 className="uppercase">{props.title}</h2>
      {props.children}
    </div>
  );
}
