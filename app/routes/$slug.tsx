import client from "$/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Route } from "./+types/$slug";
import AboutSection from "~/components/about/AboutSection";
import { data } from "react-router";
import { useTina } from "tinacms/dist/react";
import LocationLinks from "~/components/locations/LocationLinks";

export async function loader({ params }: Route.LoaderArgs) {
  let result;
  try {
    result = await client.queries.page({
      relativePath: `${params.slug}.mdx`,
    });
  } catch (err) {
    console.error(err);
    throw data("not found", { status: 404 });
  }

  if (!result || result.errors) {
    console.table(result.errors);
  }

  return { result };
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const {
    data: { page },
  } = useTina(loaderData.result);
  const components = {
    aboutSection: AboutSection,
    locationLinks: LocationLinks,
  };

  return (
    <>
      <title>{`${page.title} | Designo`}</title>

      <header className="sr-only">
        <h1>{page.title}</h1>
      </header>

      <TinaMarkdown content={page.body} components={components} />
    </>
  );
}
