import Circle from "~/assets/shared/desktop/bg-pattern-small-circle.svg";
import About from "~/assets/about/desktop/image-about-hero.jpg";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  primary?: boolean;
  invert?: boolean;
}

export default function AboutSection({
  title,
  primary = false,
  invert = false,
  children,
}: Props) {
  return (
    <section
      className={[
        "rounded-2xl overflow-hidden flex flex-col items-center lg:flex-row relative",
        primary ? "bg-primary text-white" : "bg-primary-100",
      ].join(" ")}
    >
      <figure className="aspect-video size-full lg:aspect-auto flex-1">
        <img src={About} className="size-full object-cover" alt="" />
      </figure>

      <figcaption
        className={[
          "max-w-[42rem] p-16 lg:p-24 text-center lg:text-left",
          invert && "lg:order-first",
        ].join(" ")}
      >
        <img
          src={Circle}
          className="absolute left-0 bottom-0 w-240 h-full object-left object-contain"
          alt=""
        />

        <h2
          className={[
            "heading-2 font-medium mb-6",
            !primary && "text-primary",
          ].join(" ")}
        >
          {title}
        </h2>

        {children}
      </figcaption>
    </section>
  );
}
