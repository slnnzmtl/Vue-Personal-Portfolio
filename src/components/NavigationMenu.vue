<script setup lang="ts">
const smoothScroll = (event: MouseEvent, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <nav>
    <div class="nav-content max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
      <div class="nav-links">
        <router-link to="/">About Me</router-link>
        <router-link to="/projects">Projects</router-link>
        <!-- <a href="#projects-screen" @click="smoothScroll($event, 'projects-screen')">#projects</a> -->
        <a href="#skills-screen" @click="smoothScroll($event, 'skills-screen')">#technologies</a>
      </div>

      
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  padding: 0 1rem;
  position: fixed;
  top: 10px;
  right: 10px;
  height: 60px;
  z-index: 100;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  .nav-content {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 2rem;
  }

  .nav-icon {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: var(--text);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      color: var(--cyan);
    }
  }

  .nav-links {
    display: flex;
    gap: 3rem;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    a {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      min-width: max-content;
      
      &:hover {
        color: var(--cyan);
      }

      &.router-link-active {
        color: var(--cyan);
      }
    }
  }


  &.collapsed {
    .nav-content {
      width: 60px;
      overflow: hidden;
    }

    .nav-icon {
      display: flex;
    }

    .nav-links {
      display: none;
      transform: translateX(-20px);

      * {
        min-width: max-content;
        visibility: hidden;
      }
    }

    &:hover {
      .nav-content {
        width: 400px;
        padding: 0 2rem;
      }

      .nav-icon {
        display: none;
        transform: translateX(-100%);
      }
      
      .nav-links {
        display: flex;
        transform: translateX(0);
        justify-content: space-between;
        gap: 1rem;
        width: 100%;

        * {
          visibility: visible;
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
      }
    }
  }
}
</style> 