import type { Collection } from "tinacms";

export const locationCollection: Collection = {
  name: "location",
  label: "Locations",
  path: "content/locations",
  fields: [
    {
      type: "string",
      name: "name",
      label: "Name",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      name: "map",
      label: "map",
      description:
        "Coordinates of the location. You can copy the latitude and longitude from Google Maps",
      required: false,
      fields: [
        {
          type: "string",
          name: "lat",
          label: "Latitude",
          required: true,
        },
        {
          type: "string",
          name: "lon",
          label: "longitude",
          required: true,
        },
      ],
    },
    {
      type: "image",
      name: "illustration",
      label: "Illustration image",
      description: "Illustration image to be used for links in location list",
      required: false,
    },
    {
      type: "string",
      name: "office",
      label: "Office",
      required: false,
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      required: true,
    },
    {
      type: "string",
      name: "phone",
      label: "Contact phone",
      required: true,
    },
    {
      type: "string",
      name: "email",
      label: "Contact email",
      required: true,
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      description:
        "Order of display in page. Lower number means higher priority",
      required: true,
    },
    {
      type: "boolean",
      name: "invert",
      label: "Invert image and content",
      description:
        "if inverted, the content will be displayed first (desktop only)",
      required: true,
    },
  ],
};
