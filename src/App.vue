<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { provideModalService } from "@/composables/useModal";
import { provideNavigationService } from "@/composables/useNavigation";

const BackgroundWrapper = defineAsyncComponent({
  loader: () => import("@/components/BackgroundWrapper.vue"),
  delay: 10000,
  timeout: 10000,
});

const ModalProvider = defineAsyncComponent({
  loader: () => import("@/components/ModalProvider/ModalProvider.vue"),
  delay: 10000,
  timeout: 10000,
});

const NavigationMenu = defineAsyncComponent({
  loader: () => import("@/components/NavigationMenu.vue"),
  delay: 10000,
  timeout: 10000,
});

export default defineComponent({
  name: "App",
  components: {
    BackgroundWrapper,
    NavigationMenu,
    ModalProvider,
  },
  setup() {
    provideModalService();
    const navService = provideNavigationService();

    const readyToRender = ref(false);

    onMounted(() => {
      window.dispatchEvent(new Event("scroll"));

      setTimeout(() => {
        readyToRender.value = true;
      }, 1000);
    });

    return {
      navService,
      readyToRender,
    };
  },
});
</script>

<template>
  <div>
    <BackgroundWrapper />
    <ModalProvider v-if="readyToRender" />
    <NavigationMenu />

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
:root {
  background-color: black;
  @extend %scrollbar-tidy;
}
</style>
