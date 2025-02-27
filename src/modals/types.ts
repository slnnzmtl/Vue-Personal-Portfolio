import { Component } from "vue";

interface ModalComponent {
  component: Component;
  props?: ModalProps;
}

type ModalProps = Record<string, string>;

export type { ModalComponent, ModalProps };

export enum ModalKey {
  HireForm = "HireFormModal",
  ProjectDetails = "ProjectDetailsModal",
}
