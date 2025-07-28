import type { PropsWithChildren } from "react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import WhyUsCard from "~/components/home/WhyUsCard";
import LocationLinks from "~/components/locations/LocationLinks";
import ServiceCardList from "~/components/home/ServiceCardList";

/**TODO: remove children props */
interface Props extends PropsWithChildren {
  content: TinaMarkdownContent;
}

export default function Column(props: Props) {
  const components = {
    whyUs: WhyUsCard,
    ServiceLinks: ServiceCardList,
    locationLinks: LocationLinks,
  };
  return (
    <section className="grid grid-cols-subgrid col-[full] *:first:col-start-[main] gap-4">
      <TinaMarkdown content={props.content} components={components} />
    </section>
  );
}
