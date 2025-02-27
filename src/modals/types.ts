interface ModalComponent {
  component: any;
  props?: ModalProps;
}

type ModalProps = Record<string, any>;

export type { ModalComponent, ModalProps };
