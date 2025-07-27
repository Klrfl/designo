import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  heading: string;
  image: string;
}

export default function WhyUsCard(props: Props) {
  return (
    <div className="col-[main] lg:col-span-4 grid grid-cols-6 gap-4 place-items-center">
      <figure className="col-span-full sm:max-lg:col-span-2">
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
        {props?.children}
      </figcaption>
    </div>
  );
}
