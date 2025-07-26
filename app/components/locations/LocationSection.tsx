import { slugify } from "$/app/utils";
import TwoCircle from "~/assets/shared/desktop/bg-pattern-two-circles.svg";

interface Props {
  image: string;
  label: string;
  office: {
    label: string;
    address: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  invert?: boolean;
}

export default function LocationSection(props: Props) {
  return (
    <section
      className="grid grid-cols-subgrid col-span-full"
      id={slugify(props.label)}
    >
      <figure className="col-span-full lg:col-span-4 rounded-2xl overflow-hidden">
        <img
          src={props.image}
          className="size-full object-cover"
          width="500"
          alt=""
        />
      </figure>

      <figcaption
        className={[
          "col-span-full lg:col-[span_8] rounded-2xl bg-primary-100 grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-6 px-24 py-16 relative",
          props.invert && "order-first",
        ].join(" ")}
      >
        <img
          src={TwoCircle}
          className="absolute left-12 bottom-0 w-3/4 h-7/8 object-contain"
          width="500"
          alt=""
        />
        <h2 className="heading-2 text-primary col-span-full self-end">
          {props.label}
        </h2>

        <address>
          <p className="font-bold">{props.office.label}</p>
          <span className="block">{props.office.address} </span>
          {/** <span>Toronto, Ontario M9C 3J5</span> */}
        </address>

        <div>
          <p className="font-bold">Contact</p>
          <p>P : {props.contact.phone}</p>
          <p>M : {props.contact.email}</p>
        </div>
      </figcaption>
    </section>
  );
}
