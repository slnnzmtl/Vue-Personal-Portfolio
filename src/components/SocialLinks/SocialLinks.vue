<template>
  <div
    class="social-links flex flex-wrap flex-col sm:flex-row justify-around gap-4 md:gap-8"
  >
    <p class="text-md flex items-center">Contact me:</p>
    <SButton
      v-for="link in displayLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      variant="glass"
      class="social-button"
      @click="handleLinkClick(link.name)"
    >
      <component :is="link.icon" class="w-5 h-5" />
      <span class="ml-2">{{ link.name }}</span>
    </SButton>

    <SButton
      variant="glass"
      class="social-button email-button"
      @click="copyEmailToClipboard"
    >
      <MailIcon class="w-5 h-5" />
      <span class="ml-2">Email</span>
    </SButton>

    <div v-if="showToast" class="toast">Email copied to clipboard!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import type { Component } from "vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import TelegramIcon from "@/components/icons/TelegramIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import { copyToClipboard } from "@/utils/clipboard";

interface SocialLink {
  name: string;
  url: string;
  icon: Component;
}

export default defineComponent({
  name: "SocialLinks",

  components: {
    SButton,
    GithubIcon,
    LinkedinIcon,
    TelegramIcon,
    MailIcon,
  },

  setup() {
    const emailCopied = ref(false);
    const showToast = ref(false);
    const EMAIL = "kazanskydaniel@gmail.com";

    const socialLinks: SocialLink[] = [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/daniel-kazanskiy",
        icon: LinkedinIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/slnnzmtl",
        icon: TelegramIcon,
      },
    ];

    const displayLinks = computed(() => {
      return socialLinks.filter((link) => link.name !== "Email");
    });

    const handleLinkClick = (name: string) => {
      window.gtag("event", "contact_link_clicked", {
        link: "name",
      });
    };

    const copyEmailToClipboard = async () => {
      const success = await copyToClipboard(EMAIL);

      if (success) {
        emailCopied.value = true;
        showToast.value = true;

        setTimeout(() => {
          emailCopied.value = false;
        }, 2000);

        setTimeout(() => {
          showToast.value = false;
        }, 3000);
      }
    };

    return {
      displayLinks,
      emailCopied,
      showToast,
      copyEmailToClipboard,
      handleLinkClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.social-links {
  position: relative;
}

.social-button {
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  color: var(--text);
}

.email-button {
  cursor: pointer;
  justify-content: flex-start;
  padding: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px) !important;
  }
}

.toast {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  animation: fadeInOut 3s ease;
  z-index: 10;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
