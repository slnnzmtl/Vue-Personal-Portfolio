<script setup lang="ts">
import { BackgroundWrapper, NavigationMenu } from '@components';
import { useModal } from '@composables';

const { openModal } = useModal();
</script>

<template>
  <BackgroundWrapper>
    <NavigationMenu />
    <router-view class="max-w-screen-xl 2xl:max-w-screen-2xl mt-25 mx-auto" />
  </BackgroundWrapper>
</template>

<style lang="scss">
/* Ensure text is readable on the background */
:root {
  color: #fff;

}
</style>
