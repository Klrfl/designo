interface Props {
  className?: string | string[];
  image: string;
  title: string;
  link?: {
    url?: string;
    label?: string;
  };
}

export default function ServiceCard(props: Props) {
  return (
    <div
      className={[
        "flex flex-col justify-center items-center text-center relative col-span-full md:col-span-6 p-16 rounded-2xl overflow-hidden",
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
        <h2>{props.title}</h2>
        <a href={props.link?.url ?? "#"}>
          {props.link?.label ?? "View Projects"}
        </a>
      </div>
    </div>
  );
}
