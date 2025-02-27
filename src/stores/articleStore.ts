import { ref } from 'vue';
import { Article } from './blogTypes'; // Define your Article type

const articles = ref<Article[]>([]);

const loadArticles = async () => {
  // Fetch articles from an API or other source
};

export const articleStore = {
  articles,
  loadArticles,
}; 