import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import CircleBg from "~/assets/shared/desktop/bg-pattern-small-circle.svg";

interface Props {
  text: TinaMarkdownContent;
}

export default function ContactForm({ text }: Props) {
  return (
    <section className="bg-primary relative mb-30 grid gap-10 overflow-hidden rounded-2xl px-15 py-12 text-white lg:mb-40 lg:grid-cols-12 lg:px-24">
      <img
        src={CircleBg}
        className="absolute bottom-0 z-0 w-7/12 rotate-270"
        width="400"
        alt=""
      />
      <header className="z-1 col-span-full max-w-114 self-center lg:col-span-6">
        <TinaMarkdown
          content={text}
          components={{
            h1: (props?: object) => (
              <h1 className="heading-1 mb-8">{props?.children}</h1>
            ),
          }}
        />
      </header>

      {/** TODO: add validation and some type of feedback */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        className="col-span-full col-end-[-1] flex flex-col gap-6 lg:col-span-5 lg:col-start-8"
      >
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
          className="input min-h-28 resize-y"
          cols={40}
          placeholder="Your Message"
          name="message"
          id="message"
        ></textarea>

        <button className="btn self-end">Submit</button>
      </form>
    </section>
  );
}
