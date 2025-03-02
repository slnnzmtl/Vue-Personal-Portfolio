import type { HtmlHTMLAttributes } from "vue";

export interface Project {
  id: number;
  title: string;
  position: string;
  description: string;
  url: string;
  cover: string;
  images: string[];
  html: HtmlHTMLAttributes["innerHTML"];
  tags: string[];
}
