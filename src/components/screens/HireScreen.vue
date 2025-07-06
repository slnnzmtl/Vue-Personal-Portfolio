<script lang="ts">
import { defineComponent } from "vue";
import HireMeButton from "../ui/buttons/HireMeButton.vue";

export default defineComponent({
  name: "HireScreen",
  components: {
    HireMeButton,
  },
});
</script>

<template>
  <div class="hire-screen py-20 px-4">
    <ReadyToWorkTogether title="Ready to Work Together?">
      <div class="flex flex-col items-center">
        <HireMeButton class="w-max" />
      </div>
    </ReadyToWorkTogether>
  </div>
</template>

<style lang="scss" scoped>
.hire-screen {
  display: flex;
  justify-content: center;
  min-height: 600px;
}
</style>
