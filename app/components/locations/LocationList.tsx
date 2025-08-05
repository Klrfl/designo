import client from "$/tina/__generated__/client";
import { useEffect, useState } from "react";
import LocationSection from "./LocationSection";
import type { Location } from "$/tina/__generated__/types";

export default function LocationList() {
  let [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await client.queries.locationConnection({
        sort: "order",
      });

      setLocations(
        () => response.data.locationConnection.edges?.map((e) => e?.node) ?? []
      );
    };

    fetchLocations();
  }, []);

  return (
    <div className="col-[full] grid grid-cols-subgrid gap-8 sm:col-[main]">
      {locations.map((l) => (
        <LocationSection key={l.name} {...l} />
      ))}
    </div>
  );
}
