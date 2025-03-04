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
        delay: 200,
        timeout: 10000,
      }),
    );

    app.component(
      ModalKey.ImageViewer,
      defineAsyncComponent({
        loader: () => import("@/modals/ImageViewerModal.vue"),
        loadingComponent,
        errorComponent,
        delay: 200,
        timeout: 10000,
      }),
    );
  },
};
