import { StaticImageData } from 'next/image';
import BuyingShop from '../../../public/images/banners/buyingShop.png';
import BuyingShopMobile from '../../../public/images/banners/buyingShopMobile.png';
import Ovinomio from '../../../public/images/banners/ovinomio.png';
import OvinomioMobile from '../../../public/images/banners/ovinomioMobile.png';

type Banner = {
  category: string;
  label: string;
  img: StaticImageData;
  mobileImg: StaticImageData;
  long?: boolean;
};

export const getPageBanner = (
  segment: string | null,
  searchParams?: string
): Banner | undefined => {
  switch (segment) {
    case 'buying':
      return {
        category: '와인구매처',
        label: '매장소개',
        img: BuyingShop,
        mobileImg: BuyingShopMobile,
      };
    case 'ovinomio':
      return {
        category: '와인구매처',
        label: '오비노미오',
        img: Ovinomio,
        mobileImg: OvinomioMobile,
        long: true,
      };
    case 'search':
      return {
        category: '통합검색',
        label: `'${searchParams}' 검색결과`,
        img: BuyingShop,
        mobileImg: BuyingShopMobile,
      };
    default:
      return undefined;
  }
};
