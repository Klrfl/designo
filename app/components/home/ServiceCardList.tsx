import client from "$/tina/__generated__/client";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import type { Service } from "$/tina/__generated__/types";

export default function ServiceCardList() {
  let [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await client.queries.serviceConnection({
        sort: "order",
      });

      setServices(
        () => response.data.serviceConnection.edges!.map((e) => e?.node!) ?? [],
      );
    };

    fetchServices();
  }, []);

  return services?.map((s, i) => (
    <ServiceCard
      key={i}
      image={s?.image ?? ""}
      title={s?.title ?? ""}
      link={s?._sys.filename}
      className={i === 0 ? `md:row-span-2` : ""}
    />
  ));
}
