interface Props {
  image: string;
  caption: string;
  link: string;
}
export default function LocationCard(props: Props) {
  return (
    <article className="col-span-full lg:col-span-4 text-center flex flex-col items-center gap-4">
      <figure>
        <img
          src={props.image}
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
