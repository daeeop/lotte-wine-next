import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import BuyingShopDetail from './_components/BuyingShopDetail';
import { getBuyingShopDetails } from '@/app/service/_lib/buyingShop';

type Props = {
  params: {
    shopId: number;
  };
};

export default function Page({ params }: Props) {
  const { shopId } = params;

  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ['buyingShop', `${shopId}`],
    queryFn: getBuyingShopDetails,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydrateState}>
      <BuyingShopDetail shopId={shopId.toString()} />
    </HydrationBoundary>
  );
}
