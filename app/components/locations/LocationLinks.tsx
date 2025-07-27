/** I want to receive via props but
/* how am I supposed to if we're embedding this component
/* from Tina
/*
/* interface Props {
/*   locations: Location[];
/* }
 */

import client from "$/tina/__generated__/client";
import type { LocationConnectionQuery } from "$/tina/__generated__/types";
import LocationCard from "~/components/shared/LocationCard";
import { useEffect, useState } from "react";
import { slugify } from "$/app/utils";

type NonNullable<T> = Exclude<T, null | undefined>;
type LocationEdges = NonNullable<
  LocationConnectionQuery["locationConnection"]["edges"]
>[number];
type Location = NonNullable<LocationEdges>["node"];

export default function LocationLinks() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await client.queries.locationConnection({
        sort: "order",
      });

      setLocations(
        () => response.data.locationConnection.edges?.map((e) => e?.node) ?? [],
      );
    };

    fetchLocations();
  }, []);

  return (
    <div className="grid grid-cols-subgrid col-[main]">
      {locations.map((l) => (
        <LocationCard
          key={l?.name}
          illustration={l?.illustration}
          caption={l?.name ?? ""}
          link={`/locations#${slugify(l?._sys.filename ?? "")}`}
        />
      ))}
    </div>
  );
}
