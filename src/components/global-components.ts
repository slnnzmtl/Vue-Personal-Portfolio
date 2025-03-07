import { App, defineAsyncComponent } from "vue";
import { ModalKey } from "@/modals/types";
import HireFormModal from "@/modals/HireFormModal.vue";

const loadingComponent = {
  template: '<div class="async-loading">Loading...</div>',
};

const errorComponent = {
  template: '<div class="async-error">Error loading component</div>',
};

export default {
  install: (app: App) => {
    app.component(ModalKey.HireForm, HireFormModal);
    app.component(
      ModalKey.ImageViewer,
      defineAsyncComponent({
        loader: () => import("@/modals/ImageViewerModal.vue"),
        loadingComponent,
        errorComponent,
      }),
    );
  },
};
