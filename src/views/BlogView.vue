<template>
  <div class="blog-view flex justify-center mx-6">
    <!-- <div
      class="pt-25 max-w-[95%] lg:max-w-[90%] flex flex-wrap lg:flex-nowrap gap-12"
    >
      <div class="text-left w-full">
        <p class="text-2xl sm:text-4xl font-bold mb-8">Blog</p>
        <p class="text-lg sm:text-xl mb-8">
          Here you'll find topics I'm interested in.
        </p>

        <BlogList
          :articles="articles"
          :active-article="activeArticle"
          type="grid"
          @click="onActiveArticleChange"
        />
      </div>

      <div class="scrollable-container col-span-2 lg:max-w-[68%]">
        <MarkupViewer
          class="col-span-2 hidden lg:block"
          :active-project="activeArticle"
        />
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import { BlogList } from "@/components";
import { Project } from "@/stores/projectTypes";
import { useBlogStore } from "@/stores";

export default defineComponent({
  name: "BlogView",
  components: {
    // BlogList,
  },
  setup() {
    const { articles } = useBlogStore();

    const selectedFilters = ref<string[]>([]);
    const activeArticle = ref<Project | null>(null);

    const onActiveArticleChange = (article: Project) => {
      console.log(article);
      activeArticle.value = article;
    };

    return {
      articles,
      selectedFilters,
      activeArticle,
      onActiveArticleChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.blog-view {
  position: fixed;
  inset: 0;
}

.scrollable-container {
  overflow-y: auto;
  overflow-x: visible;
  height: 100%;
  width: 100%;
  padding-right: 25px;
  padding-top: 6rem;
  padding-bottom: 3rem;

  @media (max-width: 1024px) {
    padding-right: 0;
    padding-top: 6rem;
    padding-bottom: 0;
  }

  @extend %scrollbar-hidden;
}
</style>
