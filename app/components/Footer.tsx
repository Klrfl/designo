import DesignoLight from "~/assets/shared/desktop/logo-light.png";
import ThreeCircles from "~/assets/shared/desktop/bg-pattern-three-circles.svg";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import { richTextComponents } from "./shared/RichTextComponents";
import type { OfficeLocation } from "~/types";

interface Props {
  displayCta?: boolean;
  floatingCta: TinaMarkdownContent;
  socialLinks: { icon: string; url: string }[];
  navigationLinks: { href: string; label: string }[];
  officeLocation: OfficeLocation;
}

export default function Footer({
  displayCta = true,
  floatingCta,
  socialLinks,
  navigationLinks,
  officeLocation,
}: Props) {
  return (
    <>
      {displayCta && (
        <div className="bg-primary text-white px-24 py-16 rounded-2xl -mb-20 translate-y-8 col-[main] flex flex-col items-center justify-between lg:flex-row relative">
          <img
            src={ThreeCircles}
            className="absolute inset-0 size-full"
            width="200"
            alt=""
          />

          <div className="text-center lg:text-left max-w-[50ch]">
            <TinaMarkdown
              content={floatingCta}
              components={richTextComponents}
            />
          </div>

          <button className="bg-white px-6 py-4 rounded-lg uppercase tracking-[1px] text-black">
            Get in touch
          </button>
        </div>
      )}

      <footer className="bg-base text-white/50 text-center lg:text-left pt-32 pb-24 grid grid-cols-subgrid col-[full] gap-y-8">
        <div className="col-[main] flex flex-col lg:flex-row gap-4 items-center justify-between">
          <img
            src={DesignoLight}
            className="max-w-32"
            alt="company logo"
            width="200"
            height="200"
          />

          <ul className="uppercase flex flex-col lg:flex-row gap-4 text-white">
            {navigationLinks.map((l) => (
              <li key={l.label}>
                <a className="leading-3 tracking-[2px] text-sm" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="col-[main] border-gray-700" />

        <div className="col-[main] lg:col-end-[span_4]">
          <p className="font-bold">{officeLocation.office}</p>
          <p>{officeLocation.address}</p>
        </div>

        <div className="col-[main] lg:col-span-4">
          <div className="font-bold">
            <p>
              Contact Us (
              {officeLocation.office.split(" ").splice(1, 2).join(" ")})
            </p>
            <p>P : {officeLocation.phone}</p>
            <p>M : {officeLocation.email}</p>
          </div>
        </div>

        <div className="col-[main] lg:col-span-4 flex gap-4 justify-self-center lg:justify-self-end">
          {socialLinks.map((l) => (
            <a key={l.url} href={l.url}>
              <img src={l.icon} />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
