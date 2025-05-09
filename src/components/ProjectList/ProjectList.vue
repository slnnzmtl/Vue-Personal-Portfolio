<template>
  <transition-group ref="listRef" :name="transitionName" tag="div" :class="layoutClass">
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
</template>

<script lang="ts">
import { ref, computed, defineComponent, defineAsyncComponent } from "vue";
import { ProjectCard, CardPlaceholder } from "@/components/ProjectCard";
import SButton from "@/components/ui/buttons/SButton.vue";
import { Project } from "@/stores/projectTypes";

const MarkupViewer = defineAsyncComponent({
  loader: () => import("@/components/MarkupViewer/MarkupViewer.vue"),
  delay: 1000,
  timeout: 3000,
  suspensible: true,
});

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

    const listRef = ref<HTMLElement | null>(null);

    const displayedProjects = computed(() => {
      const start = 0;
      return props.projects.slice(start, currentPage.value * itemsPerPage.value);
    });

    const layoutClass = computed(() => {
      switch (props.layout) {
        case "grid":
          return "layout grid gap-4 grid-cols-1 md:flex flex-wrap justify-start w-full max-w-screen-2xl lg:px-8 py-4";
        case "scroll":
          return "flex gap-4 flex-nowrap mx-6 pt-4";
        default:
          return "flex flex-col gap-4 lg:pr-8";
      }
    });

    const transitionName = computed(() => {
      return props.layout === "grid" ? "fade" : "fade";
    });

    const isCardActive = (id: number) => {
      return props.activeProject?.id === id;
    };

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
      layoutClass,
      transitionName,
      onCardClicked,
      isCardActive,
      onClose,
      listRef,
    };
  },
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
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
