import { Link } from "react-router";
import Chevron from "~/assets/home/desktop/icon-right-arrow.svg";

interface Props {
  className?: string | string[];
  image?: string;
  title?: string;
  link?: string;
}

export default function ServiceCard(props: Props) {
  return (
    <div
      className={[
        "relative col-[main] overflow-hidden rounded-2xl md:col-span-6",
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
        to={`/services/${props.link}`}
        className="hover:bg-primary/50 focus-visible:bg-primary/50 relative flex size-full flex-col items-center justify-center px-24 py-32 text-center transition-[background-color]"
        aria-labelledby={props.title}
      >
        <div className="text-white uppercase">
          <h2 id={props.title} className="heading-2">
            {props.title}
          </h2>
          <span className="flex items-center justify-center gap-4 text-[15px] font-medium tracking-[5px]">
            View Projects <img src={Chevron} width="10" alt="" />
          </span>
        </div>
      </Link>
    </div>
  );
}
