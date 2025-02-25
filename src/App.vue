<script setup lang="ts">
import { BackgroundWrapper, NavigationMenu } from '@components';
import { useModal } from '@composables';

const { openModal } = useModal();
</script>

<template>
  <BackgroundWrapper>
    <NavigationMenu />
    <router-view />
  </BackgroundWrapper>
</template>

<style>
/* Ensure text is readable on the background */
:root {
  color: #fff;
}
</style>
