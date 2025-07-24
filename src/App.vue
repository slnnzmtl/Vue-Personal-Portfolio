<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { provideModalService } from "@/composables/useModal";
import { provideNavigationService } from "@/composables/useNavigation";
import { provideFooterService } from "@/composables/useFooter";
import LoadingIndicator from "./components/ui/LoadingIndicator.vue";
import { useRoute } from "vue-router";

const BackgroundWrapper = defineAsyncComponent({
  loader: () => import("@/components/BackgroundWrapper.vue"),
});

const ModalProvider = defineAsyncComponent(
  () => import("@/components/ModalProvider/ModalProvider.vue")
);

const NavigationMenu = defineAsyncComponent({
  loader: () => import("@/components/NavigationMenu.vue"),
});

const Footer = defineAsyncComponent({
  loader: () => import("@/components/Footer.vue"),
});

export default defineComponent({
  name: "App",
  components: {
    BackgroundWrapper,
    NavigationMenu,
    ModalProvider,
    Footer,
    LoadingIndicator,
  },
  setup() {
    provideModalService();
    const navService = provideNavigationService();
    const footerService = provideFooterService();
    const showModalProvider = ref(false);
    const { showFooter, isFooterVisible } = footerService;
    const route = useRoute();

    onMounted(() => {
      window.dispatchEvent(new Event("scroll"));

      setTimeout(() => {
        showModalProvider.value = true;
        route.name !== "projects" && showFooter();
      }, 2000);
    });

    return {
      navService,
      isFooterVisible,
      showModalProvider,
    };
  },
});
</script>

<template>
  <div class="app-container">
    <BackgroundWrapper />
    <ModalProvider v-if="showModalProvider" />
    <NavigationMenu />

    <LoadingIndicator v-if="!showModalProvider" />

    <router-view v-slot="{ Component }">
      <Suspense>
        <template #default>
          <keep-alive>
            <component class="animate-fade-in" :is="Component" />
          </keep-alive>
        </template>
        <template #fallback>
          <div class="loading-container">
            <div class="loading-spinner"></div>
            <p class="loading-text">Loading...</p>
          </div>
        </template>
      </Suspense>
    </router-view>

    <Footer class="animate-fade-in" v-if="isFooterVisible" />
  </div>
</template>

<style lang="scss">
:root {
  background-color: black;
  @extend %scrollbar-tidy;
}

.app-container {
  overflow: hidden;
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

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  color: #ffffff;
  font-size: 1rem;
  opacity: 0.8;
  margin: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
