<script lang="ts">
import { defineComponent } from "vue";
import { BackgroundWrapper, NavigationMenu, ModalProvider } from "@/components";
import { provideModalService } from "@/composables/useModal";

export default defineComponent({
  name: "App",
  components: {
    BackgroundWrapper,
    NavigationMenu,
    ModalProvider,
  },
  setup() {
    provideModalService();
  },
});
</script>

<template>
  <BackgroundWrapper>
    <ModalProvider />
    <NavigationMenu />
    <router-view class="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto" />
  </BackgroundWrapper>
</template>

<style lang="scss">
:root {
  color: #fff;
}
</style>
