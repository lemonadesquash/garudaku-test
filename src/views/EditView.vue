<template>
  <div class="container">
    <h1>Edit News</h1>
    <div>
      <form :class="$style.Form" @submit.prevent="handleFormSubmit">
        <div :class="$style.TextInputs">
          <input
            v-model="urlToImage"
            :class="$style.TextInput"
            type="text"
            placeholder="Image URL"
          />
          <input
            v-model="title"
            :class="$style.TextInput"
            type="text"
            placeholder="Title"
          />
        </div>

        <textarea
          v-model="description"
          :class="$style.TextArea"
          placeholder="Content"
        ></textarea>

        <div :class="$style.ActionButtons">
          <ActionButton label="Save" type="submit" />
          <ActionButton label="Cancel" type="button" @click="$router.go(-1)" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/atoms/ActionButton.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      urlToImage: "",
      title: "",
      content: "",
    };
  },
  computed: {
    ...mapState(["newsDetail"]),
  },
  methods: {
    ...mapActions(["fetchNewsById", "updateNews"]),
    handleFormSubmit() {
      this.updateNews({
        id: this.$route.params.id,
        urlToImage: this.urlToImage,
        title: this.title,
        description: this.description,
      });
      this.$router.go(-1);
    },
  },
  created() {
    this.fetchNewsById(this.$route.params.id);
  },
  watch: {
    newsDetail(newValue) {
      if (Object.prototype.hasOwnProperty.call(newValue, "id")) {
        this.urlToImage = this.newsDetail.urlToImage;
        this.title = this.newsDetail.title;
        this.description = this.newsDetail.description;
      }
    },
  },
  components: {
    ActionButton,
  },
};
</script>

<style lang="scss" module>
.Form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.TextInputs {
  display: flex;
  gap: 0.75rem;
}
.TextInput,
.TextArea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #333333;
}
.TextArea {
  height: 10rem;
}
.ActionButtons {
  display: flex;
  gap: 0.75rem;
}
</style>
