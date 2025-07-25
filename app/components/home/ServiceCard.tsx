interface Props {
  className?: string | string[];
  image: string;
  title: string;
  link?: string;
}

export default function ServiceCard(props: Props) {
  return (
    <div
      className={[
        "flex flex-col justify-center items-center text-center relative col-span-full md:col-span-6 px-24 py-32 rounded-2xl overflow-hidden",
        props.className ?? [],
      ]
        .flat()
        .join(" ")}
    >
      <img
        src={props.image}
        className={[
          "absolute inset-0 size-full object-center object-cover grayscale brightness-50",
          ...(props.className ?? []),
        ]
          .flat()
          .join()}
        alt=""
      />

      <div className="z-1 text-white uppercase">
        <h2 className="heading-2">{props.title}</h2>
        <a className="tracking-[5px]" href={props.link ?? "#"}>
          View Projects
        </a>
      </div>
    </div>
  );
}
