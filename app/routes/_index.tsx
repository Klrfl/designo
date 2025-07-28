import type { Route } from "./+types/_index";
import HeaderBg from "~/assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "~/assets/home/desktop/phone.png";

import Passionate from "~/assets/home/desktop/illustration-passionate.svg";
import Resourceful from "~/assets/home/desktop/illustration-resourceful.svg";
import Friendly from "~/assets/home/desktop/illustration-friendly.svg";

import ServiceCard from "~/components/home/ServiceCard";
import WhyUsCard from "~/components/home/WhyUsCard";
import client from "$/tina/__generated__/client";
import Column from "~/components/shared/Column";

export async function loader() {
  const results = await client.queries.serviceConnection();
  const services = results.data.serviceConnection.edges
    ?.map((e) => e?.node)
    .sort((a, b) => a!.order - b!.order);

  return { services };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { services } = loaderData;

  return (
    <>
      <title>Designo</title>
      <meta name="description" content="Designo official website" />

      <header className="flex flex-col justify-between lg:flex-row items-center lg:items-start px-6 md:px-12 lg:px-24 py-16 rounded-2xl bg-primary text-white relative overflow-hidden gap-8">
        <img src={HeaderBg} className="absolute right-0 top-0 z-0" alt="TODO" />

        <div className="z-1 flex flex-col gap-8 items-center lg:items-start max-w-[60ch] text-center lg:text-left">
          <h1 className="heading-1">
            Award-winning custom designs and digital branding solutions
          </h1>

          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <button className="btn">Learn more</button>
        </div>

        <figure className="max-w-70 lg:max-w-full h-75 lg:h-120 ">
          <img src={Phone} className="w-full" width="500" alt="" />
        </figure>
      </header>

      <Column>
        {services?.map((s, i) => (
          <ServiceCard
            key={i}
            image={s?.image ?? ""}
            title={s?.title ?? ""}
            link={`/services/${s?._sys.filename}`}
            className={i === 0 ? `md:row-span-2` : ""}
          />
        ))}
      </Column>
    </>
  );
}
