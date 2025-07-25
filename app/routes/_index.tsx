import type { Route } from "./+types/_index";
import HeaderBg from "~/assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "~/assets/home/desktop/phone.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-between lg:flex-row items-center lg:items-start px-6 md:px-12 lg:px-24 py-16 rounded-lg bg-primary text-white relative overflow-hidden gap-8">
        <img src={HeaderBg} className="absolute right-0 top-0 z-0" alt="TODO" />

        <div className="z-1 flex flex-col gap-8 items-center lg:items-start max-w-[60ch] text-center lg:text-left">
          <h1>Award-winning custom designs and digital branding solutions</h1>

          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <button className="bg-white px-6 py-4 rounded-lg uppercase tracking-[1px] text-black">
            Learn more
          </button>
        </div>

        <figure className="max-w-70 lg:max-w-full h-75 lg:h-120 ">
          <img src={Phone} className="w-full" width="500" alt="" />
        </figure>
      </header>

      <div className="grid grid-cols-subgrid gap-4">
        <div className="col-span-full md:col-span-6 md:row-span-2 p-4">
          <h2>Web Design</h2>
          <a href="#">View Projects</a>
        </div>

        <div className="col-span-full md:col-span-6 p-4">
          <h2>App Design</h2>
          <a href="#">View Projects</a>
        </div>

        <div className="col-span-fullmd:col-span-6 p-4">
          <h2>Graphic Design</h2>
          <a href="#">View Projects</a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="p-4">
          <h2>Passionate</h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>

        <div className="p-4">
          <h2>Resourceful</h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>

        <div className="p-4">
          <h2> Friendly </h2>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </div>
      </div>
    </>
  );
}
