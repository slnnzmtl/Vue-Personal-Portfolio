<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted } from "vue";
import { provideModalService } from "@/composables/useModal";
import { provideNavigationService } from "@/composables/useNavigation";

const BackgroundWrapper = defineAsyncComponent({
  loader: () => import("@/components/BackgroundWrapper.vue"),
});

const ModalProvider = defineAsyncComponent({
  loader: () => import("@/components/ModalProvider/ModalProvider.vue"),
});

const NavigationMenu = defineAsyncComponent({
  loader: () => import("@/components/NavigationMenu.vue"),
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

    onMounted(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    return {
      navService,
    };
  },
});
</script>

<template>
  <div>
    <BackgroundWrapper />
    <ModalProvider />
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
  color: #fff;
  @extend %scrollbar-tidy;
}
</style>
