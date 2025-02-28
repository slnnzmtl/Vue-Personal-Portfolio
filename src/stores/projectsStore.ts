import { defineStore } from "pinia";
import { Project } from "./projectTypes";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as Array<Project>,
    isLoading: false,
    error: null as string | null,
    lastFetched: null as number | null,
  }),

  actions: {
    async fetchProjects() {
      const CACHE_DURATION = 5 * 60 * 1000;

      if (
        this.projects.length &&
        this.lastFetched &&
        Date.now() - this.lastFetched < CACHE_DURATION
      ) {
        return;
      }

      this.isLoading = true;
      this.error = null;

      try {
        const response = await fetch("/projectsMockedData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data = await response.json();
        this.projects = data.projects;
        this.lastFetched = Date.now();
      } catch (err) {
        this.error = (err as Error).message;
        console.error("Error fetching projects:", err);
      } finally {
        this.isLoading = false;
      }
    },

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
