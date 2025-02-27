import { defineStore } from "pinia";
import { Project, projects } from "./projectTypes";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: projects as Array<Project>,
  }),
  actions: {
    addProject(project: Project) {
      this.projects.push(project);
    },
  },
  getters: {
    tags(state) {
      return state.projects.reduce((acc, project) => {
        project.tags.forEach((tech) => {
          if (!acc.includes(tech)) {
            acc.push(tech);
          }
        });
        return acc;
      }, [] as string[]);
    },
  },
});
