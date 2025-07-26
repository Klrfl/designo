import type { Collection } from "tinacms";

export const pageCollection: Collection = {
  name: "page",
  label: "Pages",
  format: "mdx",
  path: "content/pages",
  fields: [
    {
      type: "string",
      name: "title",
      label: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      required: false,
      isBody: true,
    },
  ],
};
