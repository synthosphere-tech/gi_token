import { StaticImageData } from "next/image";

export interface ITournament {
  id: number;
  box_price: string;
  coming_time: string;
  description: string;
  title: string;
  subtitle: string;
  places: string;
  team_name:string;
  status:string;
  list_items: {
      id: number;
      img: StaticImageData;
      name: string;
      price: string;
  }[];
  live_link:string;
  active?: boolean;
}