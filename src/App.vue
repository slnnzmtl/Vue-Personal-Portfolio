<script setup lang="ts">
import { BackgroundWrapper, NavigationMenu, ModalProvider } from '@/components';
import { useModal } from '@/composables';

const { openModal } = useModal();
</script>

<template>
  <BackgroundWrapper>
    <ModalProvider>
      <NavigationMenu />  
      <router-view class="max-w-screen-xl 2xl:max-w-screen-2xl mt-25 mx-auto" />
    </ModalProvider>
  </BackgroundWrapper>
</template>

<style lang="scss">
:root {
  color: #fff;
}
</style>
