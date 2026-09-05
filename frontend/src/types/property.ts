export type PropertyType = "plot" | "flat";

export interface Property {
  id: string;
  type: PropertyType;
  title: string;
  area: string;
  size: string;
  price: string;
  location: string;
  description: string;
  highlights: { label: string; value: string }[];
  amenities: string[];
}
