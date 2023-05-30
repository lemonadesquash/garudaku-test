<template>
  <div class="container">
    <CardDetail :item="newsDetail" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardDetail from "@/components/molecules/CardDetail.vue";

export default {
  computed: {
    ...mapState(["newsDetail"]),
  },
  methods: {
    ...mapActions(["fetchNewsById"]),
  },
  components: {
    CardDetail,
  },
  created() {
    this.fetchNewsById(this.$route.params.id);
  },
};
</script>
