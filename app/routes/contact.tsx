import CircleBg from "~/assets/shared/desktop/bg-pattern-small-circle.svg";
import LocationLinks from "../components/locations/LocationLinks";

export default function Page() {
  return (
    <>
      <section className="bg-primary px-24 py-12 text-white rounded-2xl grid grid-cols-12 gap-8 relative overflow-hidden">
        <img
          src={CircleBg}
          className="absolute z-0 w-7/12 rotate-270 bottom-0"
          width="400"
          alt=""
        />
        <header className="z-1 max-w-prose col-span-6 self-center">
          <h1 className="heading-1 mb-8">Contact us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </header>

        <form action="" className="flex flex-col col-span-5 col-end-[-1] gap-4">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            required
          />

          <label className="sr-only" htmlFor="email">
            EMail
          </label>
          <input
            className="input"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
            required
          />

          <label className="sr-only" htmlFor="phone">
            Phone
          </label>
          <input
            className="input"
            placeholder="Phone"
            type="number"
            name="phone"
            id="phone"
            required
          />

          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            className="input resize-y min-h-28"
            cols="40"
            placeholder="Your Message"
            name="message"
            id="message"
          ></textarea>

          <button className="btn self-end">Submit</button>
        </form>
      </section>

      <section className="grid grid-cols-subgrid gap-4">
        <LocationLinks />
      </section>
    </>
  );
}
