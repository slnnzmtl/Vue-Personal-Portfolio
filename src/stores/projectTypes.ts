import type { HtmlHTMLAttributes } from "vue";

export interface Project {
  id: number;
  title: string;
  position: string;
  description: string;
  url: string;
  image: string;
  html: HtmlHTMLAttributes["innerHTML"];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Woki.one",
    position: "Lead Frontend Developer",
    description:
      "Contributed to a universal CRM system, specializing in frontend development and team leadership.",
    url: "https://woki.one",
    image: "https://picsum.photos/id/2/400/300",
    html: `<h1>Lead Frontend Developer</h1>
    <p>Woki.one</p>
    <p>2023-06 - 2023-12</p>
    <h2>Key Responsibilities:</h2>
    <h3>Engineering:</h3>
    <ul>
      <li>Developed user-friendly frontend components.</li>
      <li>Addressed architectural tasks for system optimization.</li>
    </ul>
    <h3>Team Management:</h3>
    <ul>
      <li>Led frontend team for timely code delivery.</li>
      <li>Conducted code reviews and provided mentorship.</li>
    </ul>
    <h3>Features:</h3>
    <ul>
      <li>Implemented user-focused features.</li>
      <li>Translated requirements into valuable system enhancements.</li>
    </ul>
    <h3>Refactoring:</h3>
    <ul>
      <li>Conducted codebase refactoring for maintainability.</li>
      <li>Ensured adherence to industry standards.</li>
    </ul>
    <h3>Configurability:</h3>
    <ul>
      <li>Engineered a highly configurable CRM system.</li>
      <li>Implemented customization features for user adaptability.</li>
    </ul><h1>Lead Frontend Developer</h1>
    <p>Woki.one</p>
    <p>2023-06 - 2023-12</p>
    <h2>Key Responsibilities:</h2>
    <h3>Engineering:</h3>
    <ul>
      <li>Developed user-friendly frontend components.</li>
      <li>Addressed architectural tasks for system optimization.</li>
    </ul>
    <h3>Team Management:</h3>
    <ul>
      <li>Led frontend team for timely code delivery.</li>
      <li>Conducted code reviews and provided mentorship.</li>
    </ul>
    <h3>Features:</h3>
    <ul>
      <li>Implemented user-focused features.</li>
      <li>Translated requirements into valuable system enhancements.</li>
    </ul>
    <h3>Refactoring:</h3>
    <ul>
      <li>Conducted codebase refactoring for maintainability.</li>
      <li>Ensured adherence to industry standards.</li>
    </ul>
    <h3>Configurability:</h3>
    <ul>
      <li>Engineered a highly configurable CRM system.</li>
      <li>Implemented customization features for user adaptability.</li>
    </ul><h1>Lead Frontend Developer</h1>
    <p>Woki.one</p>
    <p>2023-06 - 2023-12</p>
    <h2>Key Responsibilities:</h2>
    <h3>Engineering:</h3>
    <ul>
      <li>Developed user-friendly frontend components.</li>
      <li>Addressed architectural tasks for system optimization.</li>
    </ul>
    <h3>Team Management:</h3>
    <ul>
      <li>Led frontend team for timely code delivery.</li>
      <li>Conducted code reviews and provided mentorship.</li>
    </ul>
    <h3>Features:</h3>
    <ul>
      <li>Implemented user-focused features.</li>
      <li>Translated requirements into valuable system enhancements.</li>
    </ul>
    <h3>Refactoring:</h3>
    <ul>
      <li>Conducted codebase refactoring for maintainability.</li>
      <li>Ensured adherence to industry standards.</li>
    </ul>
    <h3>Configurability:</h3>
    <ul>
      <li>Engineered a highly configurable CRM system.</li>
      <li>Implemented customization features for user adaptability.</li>
    </ul><h1>Lead Frontend Developer</h1>
    <p>Woki.one</p>
    <p>2023-06 - 2023-12</p>
    <h2>Key Responsibilities:</h2>
    <h3>Engineering:</h3>
    <ul>
      <li>Developed user-friendly frontend components.</li>
      <li>Addressed architectural tasks for system optimization.</li>
    </ul>
    <h3>Team Management:</h3>
    <ul>
      <li>Led frontend team for timely code delivery.</li>
      <li>Conducted code reviews and provided mentorship.</li>
    </ul>
    <h3>Features:</h3>
    <ul>
      <li>Implemented user-focused features.</li>
      <li>Translated requirements into valuable system enhancements.</li>
    </ul>
    <h3>Refactoring:</h3>
    <ul>
      <li>Conducted codebase refactoring for maintainability.</li>
      <li>Ensured adherence to industry standards.</li>
    </ul>
    <h3>Configurability:</h3>
    <ul>
      <li>Engineered a highly configurable CRM system.</li>
      <li>Implemented customization features for user adaptability.</li>
    </ul>`,
    tags: ["Vue", "JavaScript", "TypeScript"],
  },
  {
    id: 2,
    title: "Subbly.co",
    position: "Senior Frontend Developer",
    description:
      "Subbly.co is a cutting-edge e-commerce platform designed for online marketplaces utilizing a subscription-first model.",
    url: "https://subbly.co",
    image: "https://picsum.photos/id/2/400/300",
    html: `<h1>Senior Frontend Developer</h1>
    <p>Subbly.co</p>
    <p>2023-11 - 2024-12</p>
    <br>
    <h2>Key Responsibilities:</h2>
    <h3>Engineering:</h3>
    <p>Subbly.co is a cutting-edge e-commerce platform designed for online marketplaces utilizing a subscription-first model.</p>
    <p>My role is development of the platform, ensuring seamless user experiences for both merchants and customers.</p>
    <br>
    <h2>Responsibilities</h2>
    <ul>
      <li>Developed and maintained responsive, high-performance user interfaces.</li>
      <li>Worked closely with UX/UI designers and backend developers.</li>
      <li>Implemented features such as subscription management and payment processing.</li>
      <li>Optimized web applications for speed and scalability.</li>
      <li>Participated in code reviews to ensure code quality.</li>
    </ul>`,
    tags: ["Vue 2", "Vue 3", "TypeScript"],
  },
  {
    id: 3,
    title: "Subbly.co",
    position: "Senior Frontend Developer",
    description:
      "Subbly.co is a cutting-edge e-commerce platform designed for online marketplaces utilizing a subscription-first model.",
    url: "https://subbly.co",
    image: "https://picsum.photos/id/2/400/300",
    html: `<h1>Senior Frontend Developer</h1>
      <p>Subbly.co</p>
      <p>2023-11 - 2024-12</p>
      <br>
      <h2>Key Responsibilities:</h2>
      <h3>Engineering:</h3>
      <p>Subbly.co is a cutting-edge e-commerce platform designed for online marketplaces utilizing a subscription-first model.</p>
      <p>My role is development of the platform, ensuring seamless user experiences for both merchants and customers.</p>
      <br>
      <h2>Responsibilities</h2>
      <ul>
        <li>Developed and maintained responsive, high-performance user interfaces.</li>
        <li>Worked closely with UX/UI designers and backend developers.</li>
        <li>Implemented features such as subscription management and payment processing.</li>
        <li>Optimized web applications for speed and scalability.</li>
        <li>Participated in code reviews to ensure code quality.</li>
      </ul>`,
    tags: ["Vue 2", "Vue 3", "TypeScript"],
  },
  {
    id: 4,
    title: "Subbly.co",
    position: "Senior Frontend Developer",
    description:
      "Subbly.co is a cutting-edge e-commerce platform designed for online marketplaces utilizing a subscription-first model.",
    url: "https://subbly.co",
    image: "https://picsum.photos/id/2/400/300",
    html: `<h1>Senior Frontend Developer</h1>
      <p>Subbly.co</p>
      <p>2023-11 - 2024-12</p>
      <br>
      <h2>Key Responsibilities:</h2>
      <h3>Engineering:</h3>
      <p>Subbly.co is a cutting-edge e-commerce platform designed for online marketplaces utilizing a subscription-first model.</p>
      <p>My role is development of the platform, ensuring seamless user experiences for both merchants and customers.</p>
      <br>
      <h2>Responsibilities</h2>
      <ul>
        <li>Developed and maintained responsive, high-performance user interfaces.</li>
        <li>Worked closely with UX/UI designers and backend developers.</li>
        <li>Implemented features such as subscription management and payment processing.</li>
        <li>Optimized web applications for speed and scalability.</li>
        <li>Participated in code reviews to ensure code quality.</li>
      </ul>`,
    tags: ["Vue 2", "Vue 3", "TypeScript"],
  },
];
