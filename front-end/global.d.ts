import '@tanstack/react-query';

declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}
