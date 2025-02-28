<template>
  <div class="project-card">
    <div class="project-card__glass"></div>
    <div class="project-card__image">
      <div class="shimmer"></div>
    </div>
    <div class="project-card__content">
      <div class="project-card__title shimmer"></div>
      <div class="project-card__description">
        <div class="shimmer"></div>
        <div class="shimmer"></div>
      </div>
      <div class="project-card__link shimmer"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &__glass {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    z-index: 0;
  }

  &__image {
    position: relative;
    height: 200px;
    z-index: 1;
  }

  &__content {
    position: relative;
    padding: 1.5rem;
    z-index: 1;
  }

  &__title {
    height: 2rem;
    width: 60%;
    margin-bottom: 1rem;
  }

  &__description {
    div {
      height: 1rem;
      margin-bottom: 0.5rem;
      &:first-child {
        width: 100%;
      }
      &:last-child {
        width: 70%;
      }
    }
  }

  &__link {
    height: 1.5rem;
    width: 30%;
    margin-top: 1.5rem;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
