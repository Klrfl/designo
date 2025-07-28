import DesignoLight from "~/assets/shared/desktop/logo-light.png";
import SVGCircles from "~/assets/shared/desktop/bg-pattern-call-to-action.svg";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import { richTextComponents } from "./shared/RichTextComponents";
import type { OfficeLocation } from "~/types";
import { Link } from "react-router";

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
        <div className="bg-primary relative col-[main] -mb-20 flex translate-y-8 flex-col items-center justify-between overflow-hidden rounded-2xl px-24 py-16 text-white lg:flex-row">
          <img
            src={SVGCircles}
            className="absolute top-0 right-0 h-full w-full object-cover"
            width="200"
            alt=""
          />

          <div className="max-w-[50ch] text-center lg:text-left">
            <TinaMarkdown
              content={floatingCta}
              components={richTextComponents}
            />
          </div>

          <button className="rounded-lg bg-white px-6 py-4 tracking-[1px] text-black uppercase">
            Get in touch
          </button>
        </div>
      )}

      <footer className="bg-base col-[full] grid grid-cols-subgrid gap-y-8 pt-32 pb-24 text-center text-white/50 lg:text-left">
        <div className="col-[main] flex flex-col items-center justify-between gap-4 lg:flex-row">
          <img
            src={DesignoLight}
            className="max-w-32"
            alt="company logo"
            width="200"
            height="200"
          />

          <ul className="flex flex-col gap-4 text-white uppercase lg:flex-row">
            {navigationLinks.map((l) => (
              <li key={l.label}>
                <Link className="text-sm leading-3 tracking-[2px]" to={l.href}>
                  {l.label}
                </Link>
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

        <div className="col-[main] flex gap-4 justify-self-center lg:col-span-4 lg:justify-self-end">
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
