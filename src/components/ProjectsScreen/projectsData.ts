import type { HtmlHTMLAttributes } from "vue";

export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
  html: HtmlHTMLAttributes["innerHTML"];
  technologies: string[];
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
    </ul>`,
    technologies: ["Vue", "OpenAI", "JavaScript"],
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
    </ul>`,
    technologies: ["Vue", "WebSocket", "JavaScript"],
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
    </ul>`,
    technologies: ["Vue", "Node.js", "IoT"],
  },
  {
    id: 4,
    name: "Weather App",
    description: "A weather forecasting application with real-time data and location support",
    url: "https://github.com/example/weather-app",
    image: "https://picsum.photos/id/4/400/300",
    html: `<h1>Weather App</h1>
    <p>Get the latest weather updates for your location.</p>
    <ul>
      <li>Current temperature</li>
      <li>Forecast for the week</li>
      <li>Weather alerts</li>
    </ul>`,
    technologies: ["Vue", "API", "JavaScript"],
  },
  {
    id: 5,
    name: "E-commerce Store",
    description: "An online store platform with product listings and shopping cart functionality",
    url: "https://github.com/example/ecommerce-store",
    image: "https://picsum.photos/id/5/400/300",
    html: `<h1>E-commerce Store</h1>
    <p>Shop the latest products online.</p>
    <ul>
      <li>Wide range of products</li>
      <li>Secure payment options</li>
      <li>Fast shipping</li>
    </ul>`,
    technologies: ["Vue", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    name: "Fitness Tracker",
    description: "A fitness tracking application to monitor workouts and health metrics",
    url: "https://github.com/example/fitness-tracker",
    image: "https://picsum.photos/id/6/400/300",
    html: `<h1>Fitness Tracker</h1>
    <p>Track your workouts and health progress.</p>
    <ul>
      <li>Workout logging</li>
      <li>Progress tracking</li>
      <li>Health metrics overview</li>
    </ul>`,
    technologies: ["Vue", "API", "JavaScript"],
  },
]; 