import type { PropsWithChildren } from "react";
import Circle from "~/assets/shared/desktop/bg-pattern-small-circle.svg";

interface Props extends PropsWithChildren {
  image: string;
  heading: string;
  text: string;
  order?: number;
}

export default function WhyUsCard(props: Props) {
  return (
    <div className="group col-[main] grid grid-cols-6 place-items-center gap-4 lg:col-span-4">
      <figure className="relative col-span-full sm:max-lg:col-span-2">
        <img
          src={Circle}
          className="absolute z-0 size-full group-nth-2:rotate-270 group-nth-3:rotate-90"
          alt=""
        />
        <img
          src={props.image}
          className="w-full"
          height="200"
          width="200"
          alt=""
        />
      </figure>

      <figcaption className="col-span-full sm:max-lg:col-span-4 lg:text-center">
        <h2 className="heading-3 uppercase">{props.heading}</h2>
        <p>{props.text}</p>
        {props?.children}
      </figcaption>
    </div>
  );
}
