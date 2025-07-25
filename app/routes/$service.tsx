import client from "$/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Route } from "./+types/$service";
import { data } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const connection = await client.queries.serviceConnection();
    const result = connection.data.serviceConnection.edges?.map(
      (post) => post?.node,
    );

    if (!result) {
      throw new Error("no content found");
    }

    const otherPages = result.filter(
      (post) => post?._sys.filename !== params.service,
    );

    const post = result.find((post) => post?._sys.filename === params.service);

    if (!post) {
      console.error(result);
      console.error(post);

      throw new Error("no content found");
    }

    return { otherPages, post };
  } catch (err) {
    console.log("error when rendering page:\n");
    console.error(err);

    throw data("not found", { status: 404 });
  }
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { otherPages, post } = loaderData;

  return (
    <>
      <h1>hai</h1>
      <TinaMarkdown content={post.body} />

      <ul className="flex gap-4">
        {otherPages
          .sort((a, b) => a.order - b.order)
          .map((r) => (
            <li>
              <a href={`/${r?._sys.filename}`}>{r?.title}</a>
            </li>
          ))}
      </ul>
    </>
  );
}
