import type { PropsWithChildren } from "react";

export default function Column(props: PropsWithChildren) {
  return (
    <section className="grid grid-cols-subgrid col-[full] *:first:col-start-[main] gap-4">
      {props.children}
    </section>
  );
}
