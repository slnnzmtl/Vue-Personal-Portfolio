declare global {
  interface Window {
    gtag(
      command: string,
      eventName: string,
      eventParams?: Record<string, any>
    ): void;
  }
}

export {} 