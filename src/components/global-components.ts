import { App, defineAsyncComponent } from "vue";
import { ModalKey } from "@/modals/types";

export default {
  install: (app: App) => {
    app.component(
      ModalKey.HireForm,
      defineAsyncComponent(() => import("@/modals/HireFormModal.vue")),
    );

    app.component(
      ModalKey.ImageViewer,
      defineAsyncComponent(() => import("@/modals/ImageViewerModal.vue")),
    );
  },
};
