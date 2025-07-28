import { slugify } from "$/app/utils";
import TwoCircle from "~/assets/shared/desktop/bg-pattern-two-circles.svg";
import CanadaMap from "~/assets/locations/desktop/image-map-canada.png";

interface Props {
  image?: string;
  name: string;
  office: string;
  address: string;
  phone: string;
  email: string;
  invert?: boolean;
}

export default function LocationSection(props: Props) {
  return (
    <section
      className="col-span-full grid grid-cols-subgrid"
      id={slugify(props.name)}
    >
      <figure className="col-span-full overflow-hidden rounded-2xl lg:col-span-4">
        {/**TODO: integrate leaflet here */}
        <img
          src={CanadaMap}
          className="size-full object-cover"
          width="500"
          alt=""
        />
      </figure>

      <figcaption
        className={[
          "bg-primary-100 relative col-span-full grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-6 rounded-2xl px-24 py-16 lg:col-[span_8]",
          Boolean(props.invert) && "order-first",
        ].join(" ")}
      >
        <img
          src={TwoCircle}
          className="absolute bottom-0 left-12 h-7/8 w-3/4 object-contain"
          width="500"
          alt=""
        />
        <h2 className="heading-2 text-primary col-span-full self-end">
          {props.name}
        </h2>

        <address>
          <p className="font-bold">{props.office}</p>
          <span className="block">{props.address} </span>
        </address>

        <div>
          <p className="font-bold">Contact</p>
          <p>P : {props.phone}</p>
          <p>M : {props.email}</p>
        </div>
      </figcaption>
    </section>
  );
}
