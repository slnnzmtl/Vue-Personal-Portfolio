<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { provideModalService } from "@/composables/useModal";
import { provideNavigationService } from "@/composables/useNavigation";

const BackgroundWrapper = defineAsyncComponent({
  loader: () => import("@/components/BackgroundWrapper.vue"),
});

const ModalProvider = defineAsyncComponent(
  () => import("@/components/ModalProvider/ModalProvider.vue")
);

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
    const showModalProvider = ref(false);

    onMounted(() => {
      window.dispatchEvent(new Event("scroll"));

      setTimeout(() => {
        showModalProvider.value = true;
      }, 500);
    });

    return {
      navService,
      showModalProvider,
    };
  },
});
</script>

<template>
  <div>
    <BackgroundWrapper />
    <ModalProvider v-if="showModalProvider" />
    <NavigationMenu />

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component class="animate-fade-in" :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss">
:root {
  background-color: black;
  @extend %scrollbar-tidy;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>
