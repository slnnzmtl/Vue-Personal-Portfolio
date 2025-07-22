<template>
  <div class="projects-view max-w-[2000px] w-full mx-auto flex justify-center px-6">
    <div class="flex flex-wrap lg:flex-nowrap gap-4">
      <ScrollableContainer
        direction="flex-col"
        :wrap="false"
        class="text-left w-full lg:max-w-[40%] pt-36"
        hide-scrollbar
        @scroll="onScroll"
      >
        <p class="text-2xl sm:text-4xl font-bold mb-8">
          {{ t("projectsScreen.title") }}
        </p>
        <p class="text-lg xl:text-xl mb-8">
          {{ t("projectsScreen.description") }}
        </p>

        <ControlPanel
          :tags="tags"
          :selected-filters="selectedFilters"
          :projects="filteredProjects"
          :active-project="activeProject"
          @on-filter-change="projectFilterChange"
          @on-project-change="onActiveProjectChange"
        />
      </ScrollableContainer>

      <ScrollableContainer
        v-if="isLgLayout"
        id="markup-viewer-container"
        hide-scrollbar
        class="pt-36"
        @scroll="onScroll"
      >
        <MarkupViewer
          id="markup-viewer"
          class="col-span-2 hidden lg:block"
          :active-project="activeProject"
        >
          <template #prepend>
            <h1>{{ activeProject?.title }}</h1>
          </template>
        </MarkupViewer>
      </ScrollableContainer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  watch,
  onBeforeUnmount,
  defineAsyncComponent,
  onMounted,
  onBeforeMount,
  onUpdated,
} from "vue";
import { useProjectsStore } from "@/stores/projectsStore";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";
import { Project } from "@/stores/projectTypes";
import { onBeforeRouteLeave, useRoute } from "vue-router";
import router from "@/router";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@/composables/useWindowSize";
import { useNavigation } from "@/composables/useNavigation";
import { debounce } from "@/utils/debounce";
import { useFooter } from "@/composables";
import { useTranslation } from "@/composables/useTranslation";

const MarkupViewer = defineAsyncComponent({
  loader: () => import("@/components/MarkupViewer/MarkupViewer.vue"),
  delay: 1000,
  timeout: 3000,
  suspensible: true,
});

const ControlPanel = defineAsyncComponent({
  loader: () => import("@/components/ControlPanel.vue"),
  suspensible: true,
});

export default defineComponent({
  name: "ProjectsView",
  components: {
    MarkupViewer,
    ControlPanel,
    ScrollableContainer,
  },
  setup() {
    const projectsStore = useProjectsStore();
    const { selectedFilters, sortedProjects, tags } = storeToRefs(projectsStore);
    const route = useRoute();
    const { width } = useWindowSize();
    const { handleScroll } = useNavigation();
    const { hideFooter, showFooter } = useFooter();

    const { t } = useTranslation();

    const isLgLayout = computed(() => width.value > 1024);

    const activeProjectId = computed(() => route.params.projectId as string | undefined);

    const activeProject = computed<Project | null>(() => {
      if (!activeProjectId.value) {
        return null;
      }
      return (
        sortedProjects.value.find((p) => p.id === Number(activeProjectId.value)) || null
      );
    });

    onBeforeMount(() => {
      hideFooter();
    });

    onUpdated(() => {
      hideFooter();
    });

    onMounted(() => {
      projectsStore.fetchProjects();
    });

    const scrollToTop = () => {
      const markupViewerContainer = document.getElementById("markup-viewer-container");

      if (markupViewerContainer) {
        setTimeout(() => {
          markupViewerContainer.scrollTo({
            top: 0,
          });
        }, 100);
      }
    };

    onBeforeRouteLeave((to) => {
      if (to.path.includes("/projects")) {
        return;
      }

      projectsStore.clearFilters();
    });

    const onScroll = (e: Event) => {
      handleScroll(e);
    };

    const debouncedGtag = debounce((title: string) => {
      window.gtag("event", "project_case_seen", {
        project: title,
      });
    }, 1000);

    watch(
      activeProject,
      (current) => {
        if (!current) {
          return;
        }

        console.log("Active project changed:", current);

        debouncedGtag(current.title);

        if (isLgLayout.value) {
          scrollToTop();
        }
      },
      { immediate: true }
    );

    const filteredProjects = computed(() => projectsStore.filteredProjects);

    const projectFilterChange = (filters: string[]) => {
      onActiveProjectChange(null);
      projectsStore.setFilters(filters);
    };

    const onActiveProjectChange = (projectId: Project["id"] | null) => {
      if (!projectId) {
        router.replace("/projects");
      } else {
        router.push(`/projects/${projectId}`);
      }
    };

    onBeforeUnmount(() => {
      projectsStore.clearFilters();
    });

    return {
      isLgLayout,
      filteredProjects,
      selectedFilters,
      activeProject,
      projectFilterChange,
      onActiveProjectChange,
      tags,
      onScroll,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 0;
  -webkit-overflow-scrolling: touch; /* For better scrolling on iOS */
}
</style>
