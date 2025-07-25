import client from "$/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Route } from "./+types/$service";
import { data } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const result = await client.queries.service({
      relativePath: `${params.service}.md`,
    });

    return result;
  } catch (err) {
    console.log("error when rendering page:\n");
    console.error(err);

    throw data("not found", { status: 404 });
  }
}
export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h1>hai</h1>
      <TinaMarkdown content={loaderData.data.service.body} />
    </>
  );
}
