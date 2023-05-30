<template>
  <div class="container">
    <NewsList />
  </div>
</template>

<script>
import NewsList from "@/components/organisms/NewsList.vue";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["news"]),
  },
  methods: {
    ...mapActions(["fetchNews"]),
  },
  components: {
    NewsList,
  },
  created() {
    if (this.news.length === 0) this.fetchNews();
  },
};
</script>
