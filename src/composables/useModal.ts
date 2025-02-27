import { inject } from "vue";
import { ModalComponent, ModalProps } from "@/modals/types";
import { HireFormModal } from "@/modals";

export default function useModal() {
  const openModal = inject("openModal");

  const closeModal = (key: string) => {};

  return {
    openModal,
    closeModal,
  };
}
