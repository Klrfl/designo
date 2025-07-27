import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import CircleBg from "~/assets/shared/desktop/bg-pattern-small-circle.svg";
import { richTextComponents } from "~/components/shared/RichTextComponents";

interface Props {
  text: TinaMarkdownContent;
}

export default function ContactForm({ text }: Props) {
  return (
    <section className="bg-primary px-24 py-12 text-white rounded-2xl grid lg:grid-cols-12 gap-8 relative overflow-hidden">
      <img
        src={CircleBg}
        className="absolute z-0 w-7/12 rotate-270 bottom-0"
        width="400"
        alt=""
      />
      <header className="z-1 max-w-prose col-span-full lg:col-span-6 self-center">
        <TinaMarkdown content={text} components={richTextComponents} />
      </header>

      {/** TODO: add validation and some type of feedback */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        className="flex flex-col col-span-full lg:col-start-8 lg:col-span-5 col-end-[-1] gap-4"
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
          className="input resize-y min-h-28"
          cols="40"
          placeholder="Your Message"
          name="message"
          id="message"
        ></textarea>

        <button className="btn self-end">Submit</button>
      </form>
    </section>
  );
}
