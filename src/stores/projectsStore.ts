import { defineStore } from "pinia";
import { Project } from "./projectTypes";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as Array<Project>,
    isLoading: false,
    error: null as string | null,
    lastFetched: null as number | null,
    selectedFilters: [] as string[],
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
        this.projects = data.projects.map((project) => new Project(project));
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

    setFilters(filters: string[]) {
      this.selectedFilters = filters;
    },

    clearFilters() {
      this.selectedFilters = [];
    },
  },
  getters: {
    tags(): string[] {
      const tagsSet = new Set<string>();
      this.projects.forEach((project) => {
        project.tags.forEach((tag) => tagsSet.add(tag));
      });
      return Array.from(tagsSet);
    },
    sortedProjects(): Project[] {
      return this.projects.slice().sort((a, b) => b.id - a.id);
    },
    filteredProjects(): Project[] {
      const selectedFiltersSet = new Set(this.selectedFilters);
      const sorted = this.sortedProjects;
      return selectedFiltersSet.size === 0
        ? sorted
        : sorted.filter((project) =>
            project.tags.some((tech) => selectedFiltersSet.has(tech)),
          );
    },
  },
});
