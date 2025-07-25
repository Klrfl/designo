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
      <header className="bg-primary text-white  rounded-2xl">
        <div className="max-w-prose mx-auto py-16">
          <TinaMarkdown
            components={{
              h1: (props) => <h1 className="heading-1">{props.children}</h1>,
              h2: (props) => (
                <h2 className="heading-2 mb-6">{props.children}</h2>
              ),
            }}
            content={post.body}
          />
        </div>
      </header>

      <h2 className="sr-only">Our Projects</h2>

      <ul className="grid gap-4 lg:grid-cols-3">
        {!post.projects && (
          <li className="text-gray text-center col-span-full">
            No projects yet
          </li>
        )}

        {post.projects?.map((p) => {
          if (!p) return <h1>no post</h1>;

          return (
            <li
              key={p.title}
              className="bg-primary-100  rounded-lg overflow-hidden"
            >
              {p.image && (
                <figure>
                  <img src={p.image} className="w-full" width="200" alt="" />
                </figure>
              )}

              <figcaption className="text-center py-8 px-12">
                <h3 className="heading-3 uppercase text-primary mb-4">
                  {p.title}
                </h3>
                <p className="text-base-700">{p.description}</p>
              </figcaption>
            </li>
          );
        })}
      </ul>

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
