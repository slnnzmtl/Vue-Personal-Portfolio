<script lang="ts">
import { defineComponent } from "vue";
import DownloadResume from "../ui/buttons/DownloadResume.vue";

export default defineComponent({
  name: "HireScreen",
  components: {
    DownloadResume,
  },
});
</script>

<template>
  <div class="hire-screen py-20 px-4">
    <ReadyToWorkTogether title="Ready to Work Together?">
      <DownloadResume type="button" />
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
