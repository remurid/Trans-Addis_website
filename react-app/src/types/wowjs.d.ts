declare module 'wowjs' {
  interface WOWConfig {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    callback?: (box: Element) => void;
    scrollContainer?: string | null;
    resetAnimation?: boolean;
  }

  class WOW {
    constructor(config?: WOWConfig);
    init(): void;
    sync(): void;
  }

  export = WOW;
}

declare module 'odometer' {
  interface OdometerOptions {
    el?: HTMLElement;
    value?: number;
    duration?: number;
    theme?: string;
    animation?: string;
  }

  class Odometer {
    constructor(options: OdometerOptions);
    update(value: number): void;
    render(): void;
  }

  export = Odometer;
}