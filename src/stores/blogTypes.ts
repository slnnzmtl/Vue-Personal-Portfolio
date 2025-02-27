export interface Article {
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
    title: "Hello World",
    description: "This is a test",
    slug: "hello-world",
    date: "2022-01-01",
    image: "https://picsum.photos/id/10/400/200",
    tags: ["test", "hello"],
    html: `This is a test`,
  },
  {
    title: "Hello World",
    description: "This is a test",
    slug: "hello-world",
    date: "2022-01-01",
    image: "https://picsum.photos/id/10/400/200",
    tags: ["test", "hello"],
    html: `This is a test`,
  },
]