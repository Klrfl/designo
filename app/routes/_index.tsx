import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <header className="px-8 py-6">
        <h1>Award-winning custom designs and digital branding solutions</h1>

        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <button>Learn more</button>
      </header>

      <div className="p-4">
        <h2>Web Design</h2>
        <a href="#">View Projects</a>
      </div>

      <div className="p-4">
        <h2>App Design</h2>
        <a href="#">View Projects</a>
      </div>

      <div className="p-4">
        <h2>Graphic Design</h2>
        <a href="#">View Projects</a>
      </div>

      <div className="flex items-center gap-4">
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
    </main>
  );
}
