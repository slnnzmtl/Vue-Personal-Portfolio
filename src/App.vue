<script lang="ts">
import { defineComponent } from "vue";
import { BackgroundWrapper, NavigationMenu, ModalProvider } from "@/components";
import { provideModalService } from "@/composables/useModal";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { LoadingIndicator } from "@/components/ui";

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
    const loadingIndicator = ref();
    const router = useRouter();

    onMounted(() => {
      // Setup router hooks for loading indicator
      router.beforeEach(() => {
        loadingIndicator.value?.start();
      });

      router.afterEach(() => {
        loadingIndicator.value?.stop();
      });
    });
  },
});
</script>

<template>
  <LoadingIndicator ref="loadingIndicator" />
  <BackgroundWrapper>
    <ModalProvider />
    <NavigationMenu />
    <router-view v-slot="{ Component }">
      <keep-alive :include="['MainView', 'ProjectsView', 'BlogView']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </BackgroundWrapper>
</template>

<style lang="scss">
:root {
  color: #fff;
  @extend %scrollbar-tidy;
}
</style>
