<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent } from "vue";
import { IconName } from "@/types/icons";

const iconMap = {
  UnderstandBusinessIcon: () => import("@/components/icons/UnderstandBusinessIcon.vue"),
  EstimateProjectIcon: () => import("@/components/icons/EstimateProjectIcon.vue"),
  ImplementUiIcon: () => import("@/components/icons/ImplementUiIcon.vue"),
  BestExperienceIcon: () => import("@/components/icons/BestExperienceIcon.vue"),
  CloseIcon: () => import("@/components/icons/CloseIcon.vue"),
  MailIcon: () => import("@/components/icons/MailIcon.vue"),
} as const;

export default defineComponent({
  name: "SIcon",
  props: {
    name: {
      type: String as () => IconName,
      required: true,
      validator: (value: string) => Object.keys(iconMap).includes(value),
    },
  },
  setup(props) {
    const iconComponent = computed(() => defineAsyncComponent(iconMap[props.name]));

    return {
      iconComponent,
    };
  },
});
</script>
