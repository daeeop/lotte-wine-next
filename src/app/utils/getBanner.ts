import { StaticImageData } from 'next/image';
import BuyingShop from '../../../public/images/banners/buyingShop.png';
import BuyingShopMobile from '../../../public/images/banners/buyingShopMobile.png';

type Banner = {
  category: string;
  label: string;
  img: StaticImageData;
  mobileImg: StaticImageData;
};

export const getPageBanner = (segment: string | null): Banner | undefined => {
  switch (segment) {
    case 'buying':
      return {
        category: '와인구매처',
        label: '매장소개',
        img: BuyingShop,
        mobileImg: BuyingShopMobile,
      };
    default:
      return undefined;
  }
};
