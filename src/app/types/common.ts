import { PropsWithChildren } from 'react';

export interface BaseResponseType {
  dateTime: string;
  version: string;
  code: number;
  message: number;
}

export interface BasePaginationType {
  size: number;
  totalElement: number;
  totalPages: number;
  number: number;
}

export interface BaseLinksType {
  href: string;
  rel: string;
}

export interface PagePropsWithChildren extends PropsWithChildren {}
