<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { BackgroundWrapper, NavigationMenu, ModalProvider } from "@/components";
import { provideModalService } from "@/composables/useModal";
import { LoadingIndicator } from "@/components/ui";
import { useProjectsStore } from "@/stores/projectsStore";

export default defineComponent({
  name: "App",
  components: {
    BackgroundWrapper,
    NavigationMenu,
    ModalProvider,
    LoadingIndicator,
  },
  setup() {
    provideModalService();
    const projectsStore = useProjectsStore();

    onMounted(() => {
      projectsStore.fetchProjects();
    });
  },
});
</script>

<template>
  <div>
    <ModalProvider />
    <BackgroundWrapper>
      <LoadingIndicator ref="loadingIndicator" />
      <NavigationMenu />
      <router-view v-slot="{ Component }">
        <keep-alive :include="['MainView', 'ProjectsView', 'BlogView']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </BackgroundWrapper>
  </div>
</template>

<style lang="scss">
:root {
  color: #fff;
  @extend %scrollbar-tidy;
}
</style>
