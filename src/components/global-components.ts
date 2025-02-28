import { HireFormModal, ProjectDetailsModal } from "@/modals";
import { ModalKey } from "@/modals/types";
import { App } from "vue";

export default {
  install: (app: App) => {
    app.component(ModalKey.HireForm, HireFormModal);
    app.component(ModalKey.ProjectDetails, ProjectDetailsModal);
  },
};
