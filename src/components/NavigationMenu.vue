<script lang="ts">
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import { useModalService } from "@/composables/useModal";
import { useNavigation } from "@/composables/useNavigation";
import { ModalKey } from "@/modals/types";
import { defineComponent, defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";

const HireMeButton = defineAsyncComponent({
  loader: () => import("@/components/ui/buttons/HireMeButton.vue"),
  suspensible: true,
});

export default defineComponent({
  name: "NavigationMenu",
  components: {
    HireMeButton,
    GlassMaterial,
  },
  setup() {
    const { openModal } = useModalService();
    const route = useRoute();
    const {
      isMenuOpen,
      isNavVisible,
      isMobileView,
      toggleMenu,
      closeMenu,
      showMenu,
    } = useNavigation();

    const menuClasses = computed(() => ({
      "menu-open": isMenuOpen.value,
      "nav-hidden": !isNavVisible.value,
      "mobile-view": isMobileView.value,
    }));

    const onModalOpen = async () => {
      await openModal(ModalKey.ConsultationForm);
      showMenu(true);
    };

    return {
      menuClasses,
      isMobileView,
      toggleMenu,
      closeMenu,
      onModalOpen,
    };
  },
});
</script>

<template>
  <nav :class="menuClasses">
    <GlassMaterial class="nav-content max-w-[2000px] mx-auto" @click.stop="closeMenu">
      <button class="burger-button" aria-label="Menu Button" @click.stop="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links pl-4">
        <router-link to="/" @click.stop="closeMenu"> Main </router-link>
        <router-link to="/projects" @click.stop="closeMenu"> Portfolio </router-link>
        <router-link to="/services" @click.stop="closeMenu"> Services </router-link>
        <router-link
          to="/#hire-screen"
          active-class=""
          exact-active-class=""
          @click.stop="closeMenu"
        >
          Contacts
        </router-link>
      </div>

      <div class="hire-button">
        <HireMeButton @click="onModalOpen" />
      </div>
    </GlassMaterial>
  </nav>
</template>

<style scoped lang="scss">
nav {
  padding: 0 0.5rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s ease;
  height: 60px;
  overflow: hidden;
  margin-top: 1rem;

  &.nav-hidden {
    transform: translateY(-100%);

    &:hover {
      transform: translateY(0);
    }
  }

  &.mobile-view {
    .burger-button {
      display: flex;
    }

    .nav-content {
      align-items: flex-start;
      padding: 1rem 1rem;
    }

    .nav-links {
      display: none;
      width: 100%;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      align-items: center;
    }

    .hire-button {
      position: absolute;
      top: 10px;
      right: 18px;
    }

    &.menu-open {
      height: 100vh;
      padding-bottom: 2rem;

      .nav-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90%;
      }

      .nav-links {
        padding: 0;
        display: flex;
      }

      .hire-button {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 0;
        inset: 0;
        margin-top: 1rem;
      }
    }
  }

  &.menu-open {
    transform: translateY(0);

    .burger-button {
      span {
        &:first-child {
          transform: translateY(9px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    }
  }

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    min-height: 60px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 30px;
    padding: 0 1rem;
  }

  .burger-button {
    position: absolute;
    top: 20px;
    left: 20px;

    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

    span {
      width: 100%;
      height: 2px;
      background-color: var(--text);
      transition: all 0.3s ease;
    }
  }

  .nav-links {
    display: flex;
    gap: 3rem;

    a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 1.5rem;

      &:hover {
        color: var(--cyan);
      }

      &.router-link-active {
        color: var(--cyan);
      }
    }
  }
}
</style>
