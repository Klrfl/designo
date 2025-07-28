import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import HeaderBg from "~/assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "~/assets/home/desktop/phone.png";
import { richTextComponents } from "./RichTextComponents";

interface Props {
  content: TinaMarkdownContent;
}

export default function HeroHeader({ content }: Props) {
  return (
    <header className="bg-primary relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl px-6 py-16 text-white md:px-12 lg:flex-row lg:items-start lg:px-24">
      <img src={HeaderBg} className="absolute top-0 right-0 z-0" alt="" />

      <div className="z-1 flex max-w-[60ch] flex-col items-center gap-8 text-center lg:items-start lg:text-left">
        <TinaMarkdown components={richTextComponents} content={content} />

        {/** TODO: remove this if you alread made a button component */}
        <button className="btn">Learn more</button>
      </div>

      <figure className="h-75 max-w-70 lg:h-120 lg:max-w-full">
        <img src={Phone} className="w-full" width="500" alt="" />
      </figure>
    </header>
  );
}
