<template>
  <div class="container">
    <ActionButton label="Cancel" @click="$router.go(-1)" />
    <h1>This is a edit page</h1>
    <div>
      <form>
        <div>
          <input type="text" placeholder="Image URL" />
        </div>
        <div>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <textarea placeholder="Content"></textarea>
        </div>

        <div>
          <ActionButton label="Save" />
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
