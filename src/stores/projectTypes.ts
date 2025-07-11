import type { HtmlHTMLAttributes } from "vue";

// export interface Project {
//   id: number;
//   title: string;
//   position: string;
//   description: string;
//   key: string;
//   url: string;
//   cover: string;
//   images: string[];
//   html: HtmlHTMLAttributes["innerHTML"];
//   tags: string[];
// }

export class Project {
  id: number;
  title: string;
  position: string;
  description: string;
  key: string;
  url: string;
  cover: string;
  images: string[];
  html: HtmlHTMLAttributes["innerHTML"];
  tags: string[];

  constructor(props) {
    this.id = props.id || 0;
    this.key = props.key || "";
    this.title = props.title;
    this.position = props.position;
    this.description = `projects.${this.key}.description`;
    this.url = props.url || "";
    this.cover = props.cover || "";
    this.images = props.images || [];
    this.html = `projects.${this.key}.html` as HtmlHTMLAttributes["innerHTML"];
    this.tags = props.tags || [];
  }
}