<template>
  <div class="container">
    <h1>Edit News</h1>
    <div>
      <form :class="$style.Form">
        <div :class="$style.TextInputs">
          <input
            :class="$style.TextInput"
            type="text"
            placeholder="Image URL"
          />
          <input :class="$style.TextInput" type="text" placeholder="Title" />
        </div>

        <textarea :class="$style.TextArea" placeholder="Content"></textarea>

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

export default {
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
