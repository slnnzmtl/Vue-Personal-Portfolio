<template>
  <div class="social-links flex gap-8">
    <SButton
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      variant="glass"
      class="social-button"
    >
      <component :is="link.icon" class="w-5 h-5" />
      <span class="ml-2">{{ link.name }}</span>
    </SButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SButton } from "@/components/ui";
import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  MailIcon,
} from "@/components/icons";
import type { Component } from "vue";

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
    const socialLinks: SocialLink[] = [
      {
        name: "GitHub",
        url: "https://github.com/slnnzmtl",
        icon: GithubIcon,
      },
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
      {
        name: "Email",
        url: "mailto:kazanskydaniel@gmail.com",
        icon: MailIcon,
      },
    ];

    return {
      socialLinks,
    };
  },
});
</script>

<style lang="scss" scoped>
.social-button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}
</style>
