import { App, defineAsyncComponent } from "vue";
import { ModalKey } from "@/modals/types";

const loadingComponent = {
  template: '<div class="async-loading">Loading...</div>',
};

const errorComponent = {
  template: '<div class="async-error">Error loading component</div>',
};

export default {
  install: (app: App) => {
    app.component(
      ModalKey.HireForm,
      defineAsyncComponent({
        loader: () => import("@/modals/HireFormModal.vue"),
        loadingComponent,
        errorComponent,
      }),
    );
    app.component(
      ModalKey.ImageViewer,
      defineAsyncComponent({
        loader: () => import("@/modals/ImageViewerModal.vue"),
        loadingComponent,
        errorComponent,
      }),
    );
    app.component(
      ModalKey.SkillCard,
      defineAsyncComponent({
        loader: () => import("@/modals/SkillCardModal.vue"),
        loadingComponent,
        errorComponent,
      }),
    );
    app.component(
      'ReadyToWorkTogether',
      defineAsyncComponent({
        loader: () => import("@/components/ReadyToWorkTogether/ReadyToWorkTogether.vue"),
        loadingComponent,
        errorComponent,
      }),
    );
    app.component(
      'SButton',
      defineAsyncComponent({
        loader: () => import("@/components/ui/buttons/SButton.vue"),
        loadingComponent,
        errorComponent,
      }),
    );
  },
};
