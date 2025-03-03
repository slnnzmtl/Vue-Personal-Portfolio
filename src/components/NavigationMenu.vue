<script lang="ts">
import { HireMeButton, GlassMaterial } from "@/components/ui";
import { useModalService } from "@/composables";
import { ModalKey } from "@/modals/types";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavigationMenu",
  components: {
    HireMeButton,
    GlassMaterial,
  },
  setup() {
    const { openModal } = useModalService();
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const smoothScroll = (event: MouseEvent, targetId: string) => {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const onModalOpen = async () => {
      await openModal(ModalKey.HireForm);
    };

    return {
      isMenuOpen,
      toggleMenu,
      onModalOpen,
      smoothScroll,
    };
  },
});
</script>

<template>
  <nav :class="{ 'menu-open': isMenuOpen }">
    <GlassMaterial class="nav-content max-w-[2000px] mx-auto">
      <button class="burger-button" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links pl-4">
        <router-link to="/" @click="isMenuOpen = false"> Main </router-link>
        <router-link to="/projects" @click="isMenuOpen = false">
          Projects
        </router-link>
        <!-- <router-link to="/blog" @click="isMenuOpen = false">Blog</router-link> -->
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
  transition: height 0.3s ease;
  height: 60px;
  overflow: hidden;
  margin-top: 1rem;

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
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

      &:hover {
        color: var(--cyan);
      }

      &.router-link-active {
        color: var(--cyan);
      }
    }
  }

  @media (max-width: 768px) {
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

      .nav-links {
        display: flex;
      }

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
  }
}
</style>
