import BgPattern from "~/assets/about/desktop/bg-pattern-hero-about-desktop.svg";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import type { PropsWithChildren } from "react";

interface Props {
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
    h2: (props?: PropsWithChildren) => (
      <h2
        className={[
          "heading-2 mb-6 font-medium",
          !primary && "text-primary",
        ].join(" ")}
      >
        {props?.children}
      </h2>
    ),
  };

  return (
    <section
      className={[
        "relative flex flex-col items-center overflow-hidden rounded-2xl lg:flex-row",
        primary ? "bg-primary text-white" : "bg-primary-100",
      ].join(" ")}
    >
      <figure className="aspect-video size-full flex-1 lg:aspect-auto">
        <img src={image} className="size-full object-cover" alt="" />
      </figure>

      <figcaption
        className={[
          "max-w-[42rem] p-16 text-center lg:p-24 lg:text-left",
          invert && "lg:order-first",
        ].join(" ")}
      >
        <img
          src={BgPattern}
          className="absolute bottom-0 left-0 h-full w-240 object-contain object-left"
          alt=""
        />

        <TinaMarkdown components={components} content={content} />
      </figcaption>
    </section>
  );
}
