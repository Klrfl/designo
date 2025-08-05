import { Link } from "react-router";
import Circle from "~/assets/shared/desktop/bg-pattern-small-circle.svg";

interface Props {
  illustration?: string;
  caption: string;
  link: string;
}

export default function LocationCard(props: Props) {
  return (
    <article className="group col-[main] flex flex-col items-center gap-4 text-center lg:col-span-4">
      <figure className="relative">
        <img
          src={Circle}
          className="absolute inset-0 size-full group-nth-1:rotate-90 group-nth-3:rotate-270"
          width="200"
          alt=""
        />
        <img
          src={props.illustration}
          className="max-h-full w-full"
          width="200"
          height="200"
          alt=""
        />
      </figure>

      <figcaption className="heading-3 mb-6 font-medium uppercase">
        {props.caption}
      </figcaption>

      <Link to={props.link} className="align-self-end btn btn-dark">
        See location
      </Link>
    </article>
  );
}
