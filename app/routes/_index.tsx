import client from "$/tina/__generated__/client";
import type { Route } from "./+types/_index";
import { data } from "react-router";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import WhyUsCard from "~/components/home/WhyUsCard";
import Column from "~/components/shared/Column";
import HeroHeader from "~/components/shared/HeroHeader";

export async function loader() {
  const result = await client.queries.page({ relativePath: "home.mdx" });
  if (!result) throw data("not found", { status: 404 });

  return { result };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const {
    data: { page },
  } = useTina(loaderData.result);

  const components = {
    column: Column,
    whyUs: WhyUsCard,
    HeroHeader: HeroHeader,
  };

  return <TinaMarkdown content={page.body} components={components} />;
}
