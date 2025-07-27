import LocationSection from "~/components/locations/LocationSection";
import type { Route } from "./+types/locations";
import client from "$/tina/__generated__/client";
import { data } from "react-router";

export async function loader() {
  const response = await client.queries.locationConnection({ sort: "order" });
  const locations = response.data.locationConnection.edges?.map(
    (edge) => edge?.node,
  );

  if (!locations) throw data("not found", { status: 404 });

  return { locations };
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { locations } = loaderData;

  return (
    <>
      <title>Locations | Designo</title>

      <header className="sr-only">
        <h1>locations</h1>
      </header>

      <div className="grid grid-cols-subgrid col-[full] sm:col-[main] gap-8 pb-40">
        {locations.map((l) => (
          <LocationSection {...l} />
        ))}
      </div>
    </>
  );
}
