import { StaticImageData } from "next/image";
import { SassColor } from "sass";

export interface ITokenomics {
  id: number;
  token_title: string;
  token_subtitle: string;
  token_description: string;
  team:string;
  status:string;
  list_items: {
      id: number;
      images: StaticImageData;
      dis: string;
      percentage: string;
  }[];
  live_link:string;
  active?: boolean;
}