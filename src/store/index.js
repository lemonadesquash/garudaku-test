import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    newsDetail: {},
  },
  mutations: {
    setNewsDetail(state, payload) {
      state.newsDetail = payload;
    },
    setNews(state, payload) {
      state.news = payload;
    },
  },
  actions: {
    async updateNews(context, payload) {
      const updatedNews = [...this.state.news];
      updatedNews[payload.id - 1].urlToImage = payload.urlToImage;
      updatedNews[payload.id - 1].title = payload.title;
      updatedNews[payload.id - 1].description = payload.description;

      context.commit("setNews", updatedNews);
    },
    async fetchNewsById(context, id) {
      if (this.state.news.length === 0) {
        await context.dispatch("fetchNews");
      }

      const foundNews = { id, ...this.state.news[id - 1] };
      context.commit("setNewsDetail", foundNews);
    },
    async fetchNews(context) {
      try {
        const { data } = await axios.get(
          "https://newsapi.org/v2/everything?q=astronomy&apiKey=c3c22837180048368ae3b712da2b1c11"
        );

        const news = data.articles.map((article) => ({
          sourceName: article.source.name,
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage || "https://via.placeholder.com/500",
          publishedAt: article.publishedAt,
          content: article.content,
        }));

        // invoke mutation
        context.commit("setNews", news);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
