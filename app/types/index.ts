import type { Location } from "$/tina/__generated__/types";

export type OfficeLocation = Pick<
  Location,
  | "address"
  | "office"
  | "phone"
  | "email"
  | "name"
  | "illustration"
  | "map"
  | "_sys"
>;
