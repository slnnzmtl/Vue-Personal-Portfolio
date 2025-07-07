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
  <div class="hire-screen px-4 text-center mx-auto">
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
  max-width: 800px;
}
</style>
