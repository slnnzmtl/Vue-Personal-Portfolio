import { Component } from "vue";

interface ModalComponent {
  component: Component;
  props?: ModalProps;
}

type ModalProps = Record<string, string>;

export type { ModalComponent, ModalProps };

export enum ModalKey {
  HireForm = "HireFormModal",
  ImageViewer = "ImageViewerModal",
  SkillCard = "SkillCardModal",
  ConsultationForm = "ConsultationFormModal",
}

export interface ModalInstance<T = any> {
  name: ModalKey;
  props?: Record<string, any>;
  resolve: (value: T | null) => void;
}
