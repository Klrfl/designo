import type { Route } from "./+types/_index";
import HeaderBg from "~/assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "~/assets/home/desktop/phone.png";

import Passionate from "~/assets/home/desktop/illustration-passionate.svg";
import Resourceful from "~/assets/home/desktop/illustration-resourceful.svg";
import Friendly from "~/assets/home/desktop/illustration-friendly.svg";

import ServiceCard from "~/components/home/ServiceCard";
import WhyUsCard from "~/components/home/WhyUsCard";
import client from "$/tina/__generated__/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

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

      <section className="grid grid-cols-subgrid gap-4">
        {services?.map((s, i) => (
          <ServiceCard
            image={s?.image ?? ""}
            title={s?.title ?? ""}
            link={s?._sys.filename}
            className={i === 0 ? `md:row-span-2` : ""}
          />
        ))}
      </section>

      <section className="flex flex-col md:flex-row items-center gap-4">
        <WhyUsCard title="Passionate" image={Passionate}>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </WhyUsCard>

        <WhyUsCard title="Resourceful" image={Resourceful}>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </WhyUsCard>

        <WhyUsCard title="Friendly" image={Friendly}>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </WhyUsCard>
      </section>
    </>
  );
}
