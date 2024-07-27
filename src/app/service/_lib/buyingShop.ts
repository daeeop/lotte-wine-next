import axiosInstance from '@/app/utils/axios-instance';
import {
  BuyingShopResponseType,
  BuyingShopRequestType,
  BuyingShopDetailsResponseType,
} from '@/app/types/buyingShop';

export const getBuyingShopList = async ({
  storeType,
  query,
  pageParam,
}: BuyingShopRequestType) => {
  const response = await axiosInstance.get<BuyingShopResponseType>(
    '/wine/v1/store',
    {
      params: {
        storeType,
        query,
        size: 12,
        page: pageParam,
      },
    }
  );
  return response.data;
};

export const getBuyingShopDetails = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_key, shopId] = queryKey;
  const response = await axiosInstance.get<BuyingShopDetailsResponseType>(
    `/wine/v1/store/${parseInt(shopId)}`
  );

  return response.data;
};
