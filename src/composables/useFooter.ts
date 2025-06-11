import { ref, provide, inject, Ref, watch, reactive, toRef } from 'vue';

const FOOTER_SERVICE_KEY = Symbol('FooterService');

interface FooterState {
  isFooterVisible: Ref<boolean>;
}

interface FooterService {
  isFooterVisible: Ref<boolean>;
  hideFooter: () => void;
  showFooter: () => void;
  toggleFooter: () => void;
}

const createState = (): FooterState => {
  const state: FooterState = {
    isFooterVisible: ref(true),
  };
  return state;
};

let footerState: FooterState | null = null;

export function provideFooterService() {
  if (!footerState) {
    footerState = createState();
  }

  const hideFooter = () => {
    console.log('hide footer called');
    if (!footerState) return;
    footerState.isFooterVisible.value = false;
  };

  const showFooter = () => {
    if (!footerState) return;
    console.log('show footer called');
    footerState.isFooterVisible.value = true;
  };

  const toggleFooter = () => {
    if (!footerState) return;
    footerState.isFooterVisible.value = !footerState.isFooterVisible.value;
  };

  const service: FooterService = {
    isFooterVisible: footerState.isFooterVisible,
    hideFooter,
    showFooter,
    toggleFooter,
  };

  provide(FOOTER_SERVICE_KEY, service);
  
  return service;
}

export function useFooter(): FooterService {
  const service = inject<FooterService>(FOOTER_SERVICE_KEY);
  if (!service) {
    throw new Error('useFooter must be used within a provider that has called provideFooterService.');
  }
  return service;
}
