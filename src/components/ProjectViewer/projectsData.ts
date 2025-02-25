import type { HtmlHTMLAttributes } from "vue";

export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
  html: HtmlHTMLAttributes["innerHTML"];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "AI Chat Assistant",
    description: "Real-time chat application with AI-powered responses using OpenAI's GPT-3",
    url: "https://github.com/example/ai-chat",
    image: "https://picsum.photos/id/1/400/300",
    html: `<h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>`
  },
  {
    id: 2,
    name: "Crypto Dashboard",
    description: "Live cryptocurrency tracking dashboard with real-time price updates",
    url: "https://github.com/example/crypto-dash",
    image: "https://picsum.photos/id/2/400/300",
    html: `<h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>`
  },
  {
    id: 3,
    name: "Smart Home IoT",
    description: "IoT platform for managing smart home devices with mobile app",
    url: "https://github.com/example/smart-home",
    image: "https://picsum.photos/id/3/400/300",
    html: `<h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>`
  },
]; 