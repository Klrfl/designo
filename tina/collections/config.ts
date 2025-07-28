import type { Collection } from "tinacms";

/**
 * Single file collection for website config
 * */
export const configCollection: Collection = {
  name: "config",
  label: "Config",
  path: "content/config",
  format: "json",
  ui: {
    allowedActions: { create: false, delete: false },
  },
  fields: [
    {
      type: "object",
      name: "navigation",
      label: "Navigation",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.label,
        }),
      },
      fields: [
        {
          type: "string",
          name: "navigationLink",
          label: "Navigation link",
        },
        {
          type: "string",
          name: "label",
          label: "Label",
        },
      ],
    },
    {
      type: "object",
      name: "footer",
      label: "Footer",
      fields: [
        {
          type: "rich-text",
          name: "floatingCta",
          label: "Floating CTA",
          description: "Content for call-to-action block in footer",
          required: false,
        },
        {
          type: "reference",
          name: "officeLocation",
          label: "Office Location",
          description: "Office address to show in footer",
          collections: ["location"],
        },
        {
          type: "object",
          name: "socialLinks",
          label: "Social links",
          list: true,
          ui: {
            itemProps: (item) => ({ label: item?.url }),
          },
          fields: [
            {
              type: "string",
              name: "url",
              label: "URL",
              required: true,
            },
            {
              type: "image",
              name: "icon",
              label: "Icon",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
