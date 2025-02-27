import { HireFormModal } from "@/modals";
import { App } from "vue";

export default {
  install: (app: App) => {
    app.component('HireFormModal', HireFormModal);
  },
};