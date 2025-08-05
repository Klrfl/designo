import client from "$/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { data } from "react-router";
import ServiceCard from "../components/home/ServiceCard";
import { richTextComponents } from "~/components/shared/RichTextComponents";
import type { Route } from "./+types/services.$service";
import { useTina } from "tinacms/dist/react";
import ProjectCard from "~/components/services/ProjectCard";
import BgPattern from "~/assets/web-design/desktop/bg-pattern-intro-web.svg";

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const connection = await client.queries.serviceConnection({
      sort: "order",
    });
    const servicePages = connection.data.serviceConnection.edges?.map(
      (post) => post?.node
    );

    if (!servicePages) {
      throw new Error("no content found");
    }

    const otherPages = servicePages.filter(
      (post) => post?._sys.filename !== params.service
    );

    return {
      otherPages,
      tinaProps: connection,
    };
  } catch (err) {
    console.log("error when rendering page:\n");
    console.error(err);

    throw data("not found", { status: 404 });
  }
}

export default function Page({ loaderData, params }: Route.ComponentProps) {
  const { otherPages, tinaProps } = loaderData;
  const {
    data: { serviceConnection },
  } = useTina(tinaProps);
  const page = serviceConnection.edges?.find(
    (e) => e!.node?._sys.filename === params.service
  )?.node;

  if (!page) throw new Error("no page found");

  return (
    <>
      <header className="bg-primary relative rounded-2xl text-center text-white max-md:mb-24">
        <img
          src={BgPattern}
          className="absolute inset-0 z-0 size-full object-cover"
          alt=""
        />
        <div className="relative z-1 mx-auto max-w-prose py-16">
          <TinaMarkdown components={richTextComponents} content={page.body} />
        </div>
      </header>

      <h2 className="sr-only">Our Projects</h2>

      <ul className="grid gap-10 max-md:mb-24 md:gap-8 lg:grid-cols-3 lg:gap-x-7.5">
        {!page.projects && (
          <li className="text-gray col-span-full text-center">
            No projects yet
          </li>
        )}

        {page.projects?.map((p) => {
          if (!p) return <h1>no page</h1>;

          return <ProjectCard project={p} />;
        })}
      </ul>

      <ul className="grid grid-cols-subgrid gap-6 max-md:mb-24 lg:flex-nowrap">
        {otherPages.map((r) => (
          <li key={r?.title} className="col-span-full lg:col-span-6">
            <ServiceCard
              image={r?.image ?? ""}
              link={r?._sys.filename}
              title={r?.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
