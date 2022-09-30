import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
}

export interface IStat {
  icon: IconProp;
  followers: number;
}

export interface IPlatform {
  label: string;
  icon: IconProp;
}
