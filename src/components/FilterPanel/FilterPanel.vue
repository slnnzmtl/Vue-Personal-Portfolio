<template>
  <ScrollableContainer
    hide-scrollbar
    direction="flex-row"
    :class="filterPanelClass"
  >
    <div class="filter-panel__tags">
      <span
        v-for="tech in tags"
        :key="tech"
        class="filter-panel__tag"
        :class="{ active: isActive(tech) }"
        @click="toggleFilter(tech)"
      >
        {{ tech }}
      </span>
    </div>
  </ScrollableContainer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ScrollableContainer } from "@/components";

export default defineComponent({
  name: "FilterPanel",
  components: {
    ScrollableContainer,
  },
  props: {
    tags: {
      type: Array<string>,
      required: true,
    },
    selectedFilters: {
      type: Array<string>,
      required: true,
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["onFilterChange"],
  setup(props, { emit }) {
    const toggleFilter = (tech: string) => {
      const index = props.selectedFilters.indexOf(tech);
      if (index === -1) {
        emit("onFilterChange", [...props.selectedFilters, tech]);
      } else {
        emit(
          "onFilterChange",
          props.selectedFilters.filter((t) => t !== tech),
        );
      }
    };

    const filterPanelClass = computed(() => {
      return ["filter-panel", props.wrap ? "wrap" : "nowrap"];
    });

    return {
      props,
      emit,
      toggleFilter,
      filterPanelClass,
    };
  },
  methods: {
    isActive(tech: string) {
      return this.props.selectedFilters.includes(tech);
    },
  },
});
</script>

<style scoped lang="scss">
.filter-panel {
  max-width: 100vw;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &.nowrap {
    .filter-panel__tags {
      flex-wrap: nowrap;
      margin: 0 1.5rem;
    }

    .filter-panel__tag {
      flex: 1 0 auto;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
  }

  &__tag {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--text);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition:
      background-color 0.3s,
      transform 0.3s;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    &:hover {
      transform: translateY(-2px);
    }

    &.active {
      background-color: var(--cyan);
      color: var(--background);
    }
  }
}
</style>
