<template>
  <footer class="footer-container">
    <GlassMaterial class="footer-content">
      <div class="footer-inner">
        <div class="footer-section">
          <h3 class="footer-heading">Daniel Kazansky</h3>
        </div>

        <div class="footer-section">
          <SocialLinks class="text-sm" />
        </div>

        <div class="footer-section copyright-section">
          <p class="footer-text">
            © {{ currentYear }} Daniel Kazansky<br />
            All rights reserved.
          </p>
        </div>
      </div>
    </GlassMaterial>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";

export default defineComponent({
  name: "Footer",
  components: {
    GlassMaterial,
    SocialLinks,
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear());

    return {
      currentYear,
    };
  },
});
</script>

<style scoped lang="scss">
.footer-container {
  width: 100%;
  padding: 1rem;
  margin-top: 3rem;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;

  transition: all 0.5s ease-in-out;
}

.footer-content {
  width: 100%;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}

.footer-heading {
  color: var(--cyan);
  font-size: 1.2rem;
}

.footer-text {
  color: var(--text-gray);
  font-size: 0.9rem;
}

.copyright-section {
  text-align: left !important;

  @media (min-width: 768px) {
    text-align: end;
  }
}
</style>
