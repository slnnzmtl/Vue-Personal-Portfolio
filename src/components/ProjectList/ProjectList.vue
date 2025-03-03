<template>
  <transition-group :name="transitionName" tag="div" :class="layoutClass">
    <template v-if="!isLoading">
      <ProjectCard
        v-for="project in displayedProjects"
        :id="`project-${project.id}`"
        :key="project.id"
        :project="project"
        :selected-filters="selectedFilters"
        :layout="layout"
        :active="isCardActive(project.id)"
        class="project"
        @click="onCardClicked(project)"
        @close="onClose"
      >
        <MarkupViewer :active-project="project" />
      </ProjectCard>
    </template>

    <template v-else>
      <CardPlaceholder v-for="n in itemsPerPage" :key="n" />
    </template>
  </transition-group>

  <SButton v-if="hasMoreProjects" class="load-more-button" @click="loadMore">
    Load More
  </SButton>
</template>

<script lang="ts">
import { ref, computed, defineComponent, watch } from "vue";
import { ProjectCard, CardPlaceholder } from "@/components/ProjectCard";
import { SButton } from "@/components/ui";
import { MarkupViewer } from "@/components/MarkupViewer";
import { Project } from "@/stores/projectTypes";

export default defineComponent({
  name: "ProjectList",
  components: {
    ProjectCard,
    CardPlaceholder,
    SButton,
    MarkupViewer,
  },
  props: {
    projects: {
      type: Array as () => Project[],
      required: true,
    },
    selectedFilters: {
      type: Array as () => string[],
      required: true,
    },
    activeProject: {
      type: Object as () => Project | null,
      required: false,
      default: null,
    },
    returnValue: {
      type: String,
      required: false,
      default: null,
    },
    layout: {
      type: String,
      required: false,
      default: "grid",
      validator: (value: string) => ["grid", "list", "scroll"].includes(value),
    },
  },
  emits: ["selected"],
  setup(props, { emit }) {
    const isLoading = ref(false);
    const itemsPerPage = ref(6);
    const currentPage = ref(1);

    const displayedProjects = computed(() => {
      const start = 0;
      return props.projects.slice(
        start,
        currentPage.value * itemsPerPage.value,
      );
    });

    const hasMoreProjects = computed(() => {
      return currentPage.value * itemsPerPage.value < props.projects.length;
    });

    const loadMore = () => {
      if (hasMoreProjects.value) {
        currentPage.value++;
      }
    };

    const layoutClass = computed(() => {
      switch (props.layout) {
        case "grid":
          return "layout grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start w-full max-w-screen-2xl lg:mx-8 pt-4";
        case "scroll":
          return "flex gap-4 flex-nowrap mx-8 pt-4";
        default:
          return "flex flex-col gap-4 lg:pr-8";
      }
    });

    const transitionName = computed(() => {
      return props.layout === "grid" ? "fade" : "fade";
    });

    const scrollToProject = (id: number) => {
      const container = document.querySelector(`#project-${id}`);

      if (container) {
        container.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const isCardActive = (id: number) => {
      return props.activeProject?.id === id;
    };

    watch(
      () => props.activeProject,
      (current, prev) => {
        if (!current) {
          setTimeout(() => {
            scrollToProject(prev?.id);
          }, 500);
          return;
        }

        setTimeout(() => {
          scrollToProject(current?.id);
        }, 500);
      },
      { immediate: true },
    );

    const onCardClicked = (project: Project) => {
      if (props.activeProject?.id === project?.id) {
        onClose();
        return;
      }

      if (props.returnValue) {
        emit("selected", project[props.returnValue]);
      } else {
        emit("selected", project);
      }
    };

    const onClose = () => {
      emit("selected", null);
    };

    return {
      isLoading,
      itemsPerPage,
      currentPage,
      displayedProjects,
      hasMoreProjects,
      loadMore,
      layoutClass,
      transitionName,
      onCardClicked,
      isCardActive,
      onClose,
    };
  },
});
</script>

<style scoped lang="scss">
.load-more-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  color: var(--text);
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.layout {
  transition: all 1s ease;
}
</style>
