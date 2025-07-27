import Australia from "~/assets/shared/desktop/illustration-australia.svg";

interface Props {
  illustration?: string;
  caption: string;
  link: string;
}

export default function LocationCard(props: Props) {
  return (
    <article className="col-[main] lg:col-span-4 text-center flex flex-col items-center gap-4">
      <figure>
        <img
          src={props.illustration ?? Australia}
          className="max-h-full w-full"
          width="200"
          height="200"
          alt=""
        />
      </figure>

      <figcaption className="uppercase heading-3 font-medium mb-6">
        {props.caption}
      </figcaption>

      <a href={props.link} className="align-self-end btn btn-dark">
        See location
      </a>
    </article>
  );
}
