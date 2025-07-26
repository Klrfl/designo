import Circle from "~/assets/shared/desktop/bg-pattern-small-circle.svg";
import type { PropsWithChildren } from "react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";

interface Props extends PropsWithChildren {
  title: string;
  primary?: boolean;
  invert?: boolean;
  image: string;
  content: TinaMarkdownContent;
}

export default function AboutSection({
  image,
  content,
  primary = false,
  invert = false,
}: Props) {
  const components = {
    h2: (props) => (
      <h2
        className={[
          "heading-2 font-medium mb-6",
          !primary && "text-primary",
        ].join(" ")}
      >
        {props.children}
      </h2>
    ),
  };

  return (
    <section
      className={[
        "rounded-2xl overflow-hidden flex flex-col items-center lg:flex-row relative",
        primary ? "bg-primary text-white" : "bg-primary-100",
      ].join(" ")}
    >
      <figure className="aspect-video size-full lg:aspect-auto flex-1">
        <img src={image} className="size-full object-cover" alt="" />
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

        <TinaMarkdown components={components} content={content} />
      </figcaption>
    </section>
  );
}
