import { slugify } from "~/utils";
import type { Collection } from "tinacms";

export const serviceCollection: Collection = {
  name: "service",
  label: "Services",
  path: "content/services",
  ui: {
    filename: {
      readonly: true,
      slugify(values) {
        const filenameSlug = slugify(values?.title);
        return filenameSlug ?? "";
      },
    },
    router: ({ document }) => `/services/${document._sys.filename}`,
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      description:
        "the order of the page to be displayed in the home page and pagination at the bottom",
      required: false,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      description: "This image will be displayed in link card",
    },
    {
      type: "object",
      name: "projects",
      label: "Projects",
      description: "list of projects to show",
      list: true,
      ui: {
        itemProps: (item) => ({
          key: item?.title + item?.description,
          label: item?.title ?? "Project",
        }),
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
          isTitle: true,
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
    {
      type: "rich-text",
      name: "body",
      label: "Header",
      description: "text for header",
      isBody: true,
    },
  ],
};
