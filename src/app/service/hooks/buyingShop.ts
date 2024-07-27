import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  BuyingShopDetails,
  BuyingShopRequestType,
  BuyingShopDetailsResponseType,
} from '@/app/types/buyingShop';
import { getBuyingShopDetails, getBuyingShopList } from '../_lib/buyingShop';

const keys = {
  getBuyingShopList: ({ storeType, query }: BuyingShopRequestType) =>
    ['buyingShop', storeType, `${query}`] as const,
  getBuyingShopDetails: (shopId: string): [string, string] =>
    ['buyingShop', shopId] as const,
};

const useGetBuyingShopList = (params: BuyingShopRequestType) => {
  const newParams = { ...params };

  if (newParams.query === null || newParams.query === undefined) {
    delete newParams.query;
  }

  if (newParams.storeType === 'ALL') delete newParams.storeType;

  return useInfiniteQuery({
    queryKey: keys.getBuyingShopList({
      storeType: params.storeType!,
      query: params.query,
    }),
    queryFn: ({ pageParam = 0 }) =>
      getBuyingShopList({ ...newParams, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.page.number;
      const totalPage = lastPage.data.page.totalPages;
      const nextPage = lastPage.data.page.number + 1;
      return currentPage !== totalPage ? nextPage : null;
    },
    select: (response) => {
      return (response.pages ?? []).flatMap((page) => page.data.content);
    },
  });
};

const useGetBuyingShopDetails = (shopId: string) => {
  return useQuery<
    BuyingShopDetailsResponseType,
    Object,
    BuyingShopDetails,
    [string, string]
  >({
    queryKey: keys.getBuyingShopDetails(shopId),
    queryFn: getBuyingShopDetails,
    enabled: parseInt(shopId) > 0,
    select: (response) => response.data,
  });
};

export { useGetBuyingShopList, useGetBuyingShopDetails };
