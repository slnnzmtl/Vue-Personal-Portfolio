<script lang="ts" setup></script>

<template>
  <div class="contacts-bar">
    <a
      href="https://www.linkedin.com/in/daniel-kazanskiy"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link"
    >
      <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" />
    </a>
    <a
      href="https://t.me/slnnzmtl"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link"
    >
      <img src="@/assets/icons/telegram.svg" alt="Telegram" />
    </a>
    <a
      href="https://wa.me/your-whatsapp-number"
      target="_blank"
      rel="noopener noreferrer"
      class="contact-link"
    >
      <img src="@/assets/icons/whatsapp.svg" alt="WhatsApp" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.contacts-bar {
  display: flex;
  gap: 1rem;

  .contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Adjust size as needed */
    height: 40px; /* Adjust size as needed */
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
