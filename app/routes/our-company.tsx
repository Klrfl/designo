import Canada from "~/assets/shared/desktop/illustration-canada.svg";
import Australia from "~/assets/shared/desktop/illustration-australia.svg";
import UnitedKingdom from "~/assets/shared/desktop/illustration-united-kingdom.svg";

import LocationCard from "~/components/shared/LocationCard";
import AboutSection from "~/components/about/AboutSection";

export default function Page() {
  const locations = [
    {
      image: Canada,
      caption: "Canada",
      link: "/locations/#canada",
    },
    {
      image: Australia,
      caption: "Australia",
      link: "/locations/#australia",
    },
    {
      image: UnitedKingdom,
      caption: "United Kingdom",
      link: "/locations/#united-kingdom",
    },
  ] as const;

  return (
    <>
      <AboutSection invert primary title="About us">
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </AboutSection>

      <AboutSection title="World-class talent">
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </AboutSection>

      <section className="grid grid-cols-subgrid gap-4">
        {locations.map((l) => (
          <LocationCard {...l} />
        ))}
      </section>

      <AboutSection title="The real deal">
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </AboutSection>
    </>
  );
}
