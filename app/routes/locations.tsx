import CanadaMap from "~/assets/locations/desktop/image-map-canada.png";
import AustraliaMap from "~/assets/locations/desktop/image-map-australia.png";
import UnitedKingdomMap from "~/assets/locations/desktop/image-map-united-kingdom.png";

import LocationSection from "~/components/locations/LocationSection";

export default function Page() {
  const locations = [
    {
      image: CanadaMap,
      label: "Canada",
      office: {
        label: "string",
        address: "string",
      },
      contact: {
        phone: "contact@designo.co",
        email: "contact@designo.co",
      },
    },
    {
      image: AustraliaMap,
      label: "Australia",
      office: {
        label: "Designo AU Office",
        address: "19 Balone Street New South Wales 12343",
      },
      contact: {
        phone: "(02) 6720 9092",
        email: "contact@designo.au",
      },
    },
    {
      image: UnitedKingdomMap,
      label: "United Kingdom",
      office: {
        label: "Designo AU Office",
        address: "19 Balone Street New South Wales 12343",
      },
      contact: {
        phone: "(02) 6720 9092",
        email: "contact@designo.au",
      },
    },
  ] as const;
  return (
    <>
      <header className="sr-only">
        <h1>locations</h1>
      </header>

      <div className="grid grid-cols-subgrid col-[full] sm:col-[main] gap-8 pb-40">
        {locations.map((l) => (
          <LocationSection {...l} invert={l.label === "Australia"} />
        ))}
      </div>
    </>
  );
}
