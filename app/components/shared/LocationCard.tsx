import { Link } from "react-router";
import Circle from "~/assets/shared/desktop/bg-pattern-small-circle.svg";

interface Props {
  illustration?: string;
  caption: string;
  link: string;
}

export default function LocationCard(props: Props) {
  return (
    <article className="col-[main] lg:col-span-4 text-center flex flex-col items-center gap-4 group">
      <figure class="relative">
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

      <figcaption className="uppercase heading-3 font-medium mb-6">
        {props.caption}
      </figcaption>

      <Link to={props.link} className="align-self-end btn btn-dark">
        See location
      </Link>
    </article>
  );
}
