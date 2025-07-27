import { Link } from "react-router";

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
        "col-[main] md:col-span-6 rounded-2xl overflow-hidden relative",
        props.className ?? [],
      ]
        .flat()
        .join(" ")}
    >
      <img
        src={props.image}
        className="absolute inset-0 size-full object-cover brightness-50"
        alt=""
      />

      <Link
        to={props.link ?? "#"}
        className="relative flex flex-col justify-center items-center text-center px-24 py-32 size-full hover:bg-primary/50 focus-visible:bg-primary/50 transition-[background-color]"
        aria-aria-labelledby={props.title}
      >
        <div className="text-white uppercase">
          <h2 id={props.title} className="heading-2">
            {props.title}
          </h2>
          <span className="tracking-[5px]">View Projects</span>
        </div>
      </Link>
    </div>
  );
}
