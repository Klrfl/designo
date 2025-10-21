import type { OfficeLocation } from "$/app/types";
import { slugify } from "$/app/utils";
import client from "$/tina/__generated__/client";
import { useEffect, useState } from "react";
import LocationCard from "~/components/shared/LocationCard";

export default function LocationLinks() {
  const [locations, setLocations] = useState<OfficeLocation[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await client.queries.locationConnection({
        sort: "order",
      });

      setLocations(
        () => response.data.locationConnection.edges!.map((e) => e?.node!) ?? []
      );
    };

    fetchLocations();
  }, []);

  return locations.map((l) => (
    <LocationCard
      key={l?.name}
      illustration={l.illustration!}
      caption={l?.name ?? ""}
      link={`/locations#${slugify(l?.name ?? "")}`}
    />
  ));
}
