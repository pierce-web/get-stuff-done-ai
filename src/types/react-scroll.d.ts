
declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    activeClass?: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}
}
