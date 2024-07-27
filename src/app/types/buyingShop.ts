import { BasePaginationType, BaseResponseType, BaseLinksType } from './common';

export interface BuyingShop {
  id: number;
  name: string;
  mobile: string;
  thumbnail: string;
  links: [];
}

export type BuyingShopType =
  | 'ALL'
  | 'OVINOMIO'
  | 'DEPARTMENT_STORE'
  | 'DUTY_FREE';

export interface BuyingShopResponseType extends BaseResponseType {
  data: {
    content: BuyingShop[];
    links: BaseLinksType[];
    page: BasePaginationType;
  };
}

export type BuyingShopRequestType = {
  storeType?: BuyingShopType;
  query?: string | null;
  size?: number;
  pageParam?: number;
};

export interface BuyingShopDetails {
  storeType: string;
  thumbnail: string;
  name: string;
  mainAddress: string;
  mobile: string;
  operate: string;
  dayOff: string;
  parking: boolean;
  content: string;
  bus: string;
  car: string;
  subway: string;
  latitude: number;
  longitude: number;
}

export interface BuyingShopDetailsResponseType extends BaseResponseType {
  data: BuyingShopDetails;
}
