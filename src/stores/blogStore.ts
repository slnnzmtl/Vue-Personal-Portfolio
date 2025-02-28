import { defineStore } from "pinia";
import { Article, articles } from "./blogTypes";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    articles: articles as Array<Article>,
  }),
  actions: {
    addArticle(article: Article) {
      this.projects.push(article);
    },
  },
});
