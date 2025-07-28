import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import HeaderBg from "~/assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "~/assets/home/desktop/phone.png";
import { richTextComponents } from "./RichTextComponents";

interface Props {
  content: TinaMarkdownContent;
}

export default function HeroHeader({ content }: Props) {
  return (
    <header className="flex flex-col justify-between lg:flex-row items-center lg:items-start px-6 md:px-12 lg:px-24 py-16 rounded-2xl bg-primary text-white relative overflow-hidden gap-8">
      <img src={HeaderBg} className="absolute right-0 top-0 z-0" alt="" />

      <div className="z-1 flex flex-col gap-8 items-center lg:items-start max-w-[60ch] text-center lg:text-left">
        <TinaMarkdown components={richTextComponents} content={content} />

        {/** TODO: remove this if you alread made a button component */}
        <button className="btn">Learn more</button>
      </div>

      <figure className="max-w-70 lg:max-w-full h-75 lg:h-120 ">
        <img src={Phone} className="w-full" width="500" alt="" />
      </figure>
    </header>
  );
}
