<template>
  <div>
    <h1>Blog</h1>
    <BlogList :articles="articles" :selected-filters="selectedFilters" type="list" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { articleStore } from '@/stores/articleStore';
import { BlogList } from '@/components';

const articles = articleStore.articles;
const selectedFilters = ref([]);
</script> 