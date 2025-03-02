/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalKey, ModalInstance } from "@/modals/types";
import { reactive, provide, inject } from "vue";
interface ModalService {
  openModal: <T>(
    name: ModalKey,
    props?: Record<string, any>,
  ) => Promise<T | null>;
  closeModal: (key: string, result: any) => void;
  activeModals: ModalInstance[];
}

const MODAL_SERVICE_KEY = Symbol("ModalService");

export function provideModalService() {
  const modals = reactive<ModalInstance[]>([]);

  function openModal<T>(
    name: ModalKey,
    props: Record<string, any> = {},
  ): Promise<T | null> {
    return new Promise<T | null>((resolve) => {
      modals.push({ name, props, resolve });
    });
  }

  function closeModal(name: string, result: any) {
    const index = modals.findIndex((modal) => modal.name === name);
    if (index !== -1) {
      modals[index].resolve(result);
      modals.splice(index, 1);
    }
  }

  provide(MODAL_SERVICE_KEY, { openModal, closeModal, activeModals: modals });
}

export function useModalService(): ModalService {
  const service = inject<ModalService>(MODAL_SERVICE_KEY);
  if (!service) {
    throw new Error("useModalService must be used within a ModalProvider.");
  }
  return service;
}
