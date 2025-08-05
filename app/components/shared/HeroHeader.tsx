import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import HeaderBg from "~/assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "~/assets/home/desktop/phone.png";
import { richTextComponents } from "./RichTextComponents";

interface Props {
  content: TinaMarkdownContent;
}

export default function HeroHeader({ content }: Props) {
  return (
    <header className="bg-primary relative col-[full] flex flex-col items-center justify-between gap-8 overflow-hidden px-6 py-22 text-white md:col-[main] md:rounded-2xl md:px-12 lg:flex-row lg:items-start lg:px-24 lg:pt-36">
      <img src={HeaderBg} className="absolute top-0 right-0 z-0" alt="" />

      <div className="z-1 flex max-w-[50ch] flex-col items-center text-center lg:items-start lg:text-left">
        <TinaMarkdown
          components={{
            ...richTextComponents,
            h1: ({ children }: object) => (
              <h1 className="md:heading-1 mb-[14px] text-[32px] leading-9 font-medium">
                {children}
              </h1>
            ),
            p: ({ children }: object) => (
              <p className="leading-[25px] max-md:text-[15px] md:leading-[unset]">
                {children}
              </p>
            ),
          }}
          content={content}
        />

        {/** TODO: remove this if you alread made a button component */}
        <button className="btn mt-6">Learn more</button>
      </div>

      <figure className="h-75 max-w-70 lg:h-120 lg:max-w-full">
        <img src={Phone} className="w-full" width="500" alt="" />
      </figure>
    </header>
  );
}
