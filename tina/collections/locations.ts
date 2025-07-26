import type { Collection } from "tinacms";

export const locationCollection: Collection = {
  name: "location",
  label: "Locations",
  path: "content/locations",
  fields: [
    {
      type: "string",
      name: "location",
      label: "Location",
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
  ],
};
