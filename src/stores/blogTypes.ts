export interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  tags: string[];
  html: string;
}

export const articles: Array<Article> = [
  {
    id: 1,
    title: "Hello World",
    description: "This is a test",
    slug: "hello-world",
    date: "2022-01-01",
    image: "https://picsum.photos/id/10/400/200",
    tags: ["test", "hello"],
    html: `This is a test`,
  },
  {
    id: 2,
    title: "Hello World",
    description: "This is a test",
    slug: "hello-world",
    date: "2022-01-01",
    image: "https://picsum.photos/id/10/400/200",
    tags: ["test", "hello"],
    html: `This is a test`,
  },
];
