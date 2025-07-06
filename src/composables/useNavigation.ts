import { ref, onBeforeUnmount, provide, inject, readonly, Ref } from 'vue';

const NAV_SERVICE_KEY = Symbol('NavigationService');

interface NavigationState {
  isNavVisible: Ref<boolean>;
  isMenuOpen: Ref<boolean>;
  lastScrollPosition: Ref<number>;
  isMobileView: Ref<boolean>;
  scrollElement: Ref<HTMLElement | null>;
}

interface NavigationService {
  isNavVisible: Readonly<Ref<boolean>>;
  isMenuOpen: Readonly<Ref<boolean>>;
  isMobileView: Readonly<Ref<boolean>>;
  toggleMenu: () => void;
  closeMenu: () => void;
  showMenu: (open: boolean) => void;
  setScrollElement: (element: HTMLElement | null) => void;
  handleScroll: (event: Event) => void;
}

const createState = (): NavigationState => {
  const state: NavigationState = {
    isNavVisible: ref(true),
    isMenuOpen: ref(false),
    lastScrollPosition: ref(0),
    isMobileView: ref(window.innerWidth <= 1024),
    scrollElement: ref(null)
  };
  return state;
};

let navigationState: NavigationState | null = null;

const scrollThreshold = 50;
const handleScroll = (event: Event) => {
  if (!navigationState) return;
  
  if (navigationState.isMenuOpen.value) {
    navigationState.isNavVisible.value = true;
    return;
  }

  const target = event.target as HTMLElement | Document;
  const currentScrollPosition = target instanceof HTMLElement 
    ? target.scrollTop 
    : window.scrollY;
  
  if (currentScrollPosition < 50) {
    navigationState.isNavVisible.value = true;
    navigationState.lastScrollPosition.value = currentScrollPosition;
    return;
  }
  
  if (Math.abs(currentScrollPosition - navigationState.lastScrollPosition.value) < scrollThreshold) {
    return;
  }
  
  navigationState.isNavVisible.value = currentScrollPosition < navigationState.lastScrollPosition.value;
  
  navigationState.lastScrollPosition.value = currentScrollPosition;
};

const handleResize = () => {
  if (!navigationState) return;
  
  const newIsMobileView = window.innerWidth <= 1024;
  navigationState.isMobileView.value = newIsMobileView;
  
  if (!newIsMobileView && navigationState.isMenuOpen.value) {
    navigationState.isMenuOpen.value = false;
  }
};

let listenersInitialized = false;

const setupScrollListeners = () => {
  if (!navigationState) return;
  
  removeScrollListeners();
  
  if (navigationState.scrollElement.value) {
    navigationState.scrollElement.value.addEventListener('scroll', handleScroll);
  } else {
    window.addEventListener('scroll', handleScroll);
  }
};

const removeScrollListeners = () => {
  if (!navigationState) return;
  
  if (navigationState.scrollElement.value) {
    navigationState.scrollElement.value.removeEventListener('scroll', handleScroll);
  }
  
  window.removeEventListener('scroll', handleScroll);
};

export function provideNavigationService() {
  if (!navigationState) {
    navigationState = createState();
  }
  
  if (!listenersInitialized) {
    window.addEventListener('resize', handleResize);
    setupScrollListeners();
    listenersInitialized = true;
    
    onBeforeUnmount(() => {
      removeScrollListeners();
      window.removeEventListener('resize', handleResize);
      listenersInitialized = false;
    });
  }

  const toggleMenu = () => {
    if (!navigationState) return;
    navigationState.isMenuOpen.value = !navigationState.isMenuOpen.value;
    
    if (navigationState.isMenuOpen.value) {
      navigationState.isNavVisible.value = true;
    }
  };

  const closeMenu = () => {
    if (!navigationState) return;
    navigationState.isMenuOpen.value = false;
  };

  const showMenu = (open: boolean) => {
    if (!navigationState) return;
    navigationState.isNavVisible.value = open;
  };
  
  const setScrollElement = (element: HTMLElement | null) => {
    if (!navigationState) return;
    navigationState.scrollElement.value = element;
    setupScrollListeners();
  };

  const service: NavigationService = {
    isNavVisible: readonly(navigationState.isNavVisible),
    isMenuOpen: readonly(navigationState.isMenuOpen),
    isMobileView: readonly(navigationState.isMobileView),
    toggleMenu,
    closeMenu,
    showMenu,
    setScrollElement,
    handleScroll,
  };

  provide(NAV_SERVICE_KEY, service);
  
  return service;
}

export function useNavigation(): NavigationService {
  const service = inject<NavigationService>(NAV_SERVICE_KEY);
  if (!service) {
    throw new Error('useNavigation must be used within a NavigationProvider.');
  }
  return service;
} 