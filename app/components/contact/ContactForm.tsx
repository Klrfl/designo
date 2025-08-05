import { useForm } from "react-hook-form";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import CircleBg from "~/assets/shared/desktop/bg-pattern-small-circle.svg";
import IconError from "~/assets/contact/desktop/icon-error.svg";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { PropsWithChildren } from "react";

interface Props {
  text: TinaMarkdownContent;
}

function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="max-h-content absolute inset-0 left-auto hidden items-center gap-2 py-3 pr-4 text-sm italic peer-invalid:flex">
      {children}
      <img src={IconError} width="20" alt="" />
    </p>
  );
}

export default function ContactForm({ text }: Props) {
  const schema = z.object({
    name: z.string("what the fuck").nonempty("can't be empty"),
    email: z.email("can't be empty"),
    phone: z.number("phone not valid!").positive("can't be empty"),
    message: z.string().nonempty("can't be empty"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: true,
  });

  /**
   * TODO: put into a database or something
   * */
  const onSubmit = (e: z.infer<typeof schema>) => {
    console.log(e);
  };

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
            h1: (props?: PropsWithChildren) => (
              <h1 className="heading-1 mb-8">{props?.children}</h1>
            ),
          }}
        />
      </header>

      {/** TODO: add validation and some type of feedback */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-full col-end-[-1] flex flex-col gap-6 lg:col-span-5 lg:col-start-8"
      >
        <label className="relative" htmlFor="name">
          <span className="sr-only">Name</span>

          <input
            {...register("name")}
            className="input peer"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
          />
          <ErrorMessage>{formState.errors.name?.message}</ErrorMessage>
        </label>

        <label className="relative" htmlFor="email">
          <span className="sr-only">Email</span>

          <input
            {...register("email")}
            className="input text peer"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />

          <ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
        </label>

        <label className="relative" htmlFor="phone">
          <span className="sr-only">Phone</span>
          <input
            {...register("phone")}
            className="input peer"
            style={{ MozAppearance: "textfield" }}
            placeholder="Phone"
            type="number"
            name="phone"
            id="phone"
          />
          <ErrorMessage>{formState.errors.phone?.message}</ErrorMessage>
        </label>

        <label className="relative" htmlFor="message">
          <span className="sr-only">Message</span>

          <textarea
            {...register("message")}
            className="input peer min-h-28 resize-y"
            cols={40}
            placeholder="Your Message"
            name="message"
            id="message"
          ></textarea>

          <ErrorMessage>{formState.errors.message?.message}</ErrorMessage>
        </label>

        <button className="btn self-end">Submit</button>
      </form>
    </section>
  );
}
