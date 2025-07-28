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
    <div className="col-[main] lg:col-span-4 grid grid-cols-6 gap-4 place-items-center group">
      <figure className="col-span-full sm:max-lg:col-span-2  relative">
        <img
          src={Circle}
          className="absolute size-full z-0 group-nth-2:rotate-270 group-nth-3:rotate-90"
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
        <h2 className="uppercase heading-3">{props.heading}</h2>
        <p>{props.text}</p>
        {props?.children}
      </figcaption>
    </div>
  );
}
