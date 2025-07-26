import type { Collection, Template } from "tinacms";

const aboutBlock: Template = {
  name: "aboutSection",
  label: "About section",
  ui: {
    itemProps: (item) => ({ label: item?.title ?? "About section" }),
  },

  fields: [
    {
      type: "image",
      name: "image",
      label: "Image",
      required: false,
    },
    {
      type: "boolean",
      name: "invert",
      label: "Invert",
      description:
        "if toggled, display content first, ahead of the image (desktop only).",
    },
    {
      type: "boolean",
      name: "primary",
      label: "primary",
      description: "mark if primary section",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      required: true,
    },
  ],
};

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
      templates: [aboutBlock],
    },
  ],
};
