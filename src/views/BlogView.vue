<template>
  <transition name="fade" mode="out-in">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 ml-6 mr-6">
      <div class="text-left">
        <p class="text-2xl sm:text-4xl font-bold mb-8">Blog</p>
        <p class="text-lg sm:text-xl mb-8">
          Here you'll find topics I'm interested in. 
        </p>

        <BlogList
          :articles="articles"
          :activeArticle="activeArticle"
          @click="onActiveArticleChange"
          type="list"
        />
      </div>

      <MarkupViewer class="col-span-2 hidden lg:block" :active-project="activeArticle" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, watch } from "vue";
import { useRoute } from 'vue-router';
import { MarkupViewer, BlogList } from "@/components";
import { Project } from "@/stores/projectTypes";
import { useBlogStore } from "@/stores";

const { articles } = useBlogStore();

const selectedFilters = ref<string[]>([]);
const activeArticle = ref<Project | null>(null);
const route = useRoute();

const onActiveArticleChange = (article: Project) => {
  activeArticle.value = article;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
