<template>
  <div class="article-viewer">
    <transition-group :name="transitionName" tag="div" :class="layoutClass">
      <template v-if="!isLoading">
        <ProjectCard
          v-for="article in articles"
          :key="article.id"
          :project="article"
          :selected-filters="selectedFilters"
          :active="isCardActive(article.id)"
          type="grid"
          return-value="id"
          @click="onArticleClick(article)"
        />
      </template>

      <template v-else>
        <CardPlaceholder v-for="n in itemsPerPage" :key="n" />
      </template>
    </transition-group>

    <SButton v-if="hasMoreArticles" class="load-more-button" @click="loadMore">
      Load More
    </SButton>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ProjectCard, CardPlaceholder } from "@/components/ProjectCard";
import { SButton } from "@/components/ui";
import { Article } from "@/stores/blogTypes";
import { useBlogStore } from "@/stores";

export default defineComponent({
  name: "BlogList",
  components: {
    ProjectCard,
    CardPlaceholder,
    SButton,
  },
  props: {
    selectedFilters: {
      type: Array<string>,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "list",
      validator: (value: string) => {
        return ["list", "grid"].includes(value);
      },
    },
    activeArticle: {
      type: Object,
      required: true,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { articles } = useBlogStore();

    const layoutClass = computed(() => {
      return props.type === "grid"
        ? "layout flex flex-wrap gap-4 justify-start w-full"
        : "flex flex-col gap-4";
    });

    const onArticleClick = (article: Article) => {
      console.log(article);
      emit("click", article);
    };

    const isCardActive = (id: number) => {
      return props.activeArticle?.id === id;
    };
    return {
      articles,
      layoutClass,
      onArticleClick,
      isCardActive,
    };
  },
});
</script>

<style scoped lang="scss">
.article-viewer {
  position: relative;
}
</style>
