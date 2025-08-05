import type { Location } from "$/tina/__generated__/types";

export type OfficeLocation = Pick<
  Location,
  "address" | "office" | "illustration" | "phone" | "email" | "name"
>;
