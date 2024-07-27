'use client';

import { useMobile, useTabs } from '@/app/hooks';
import { BUYING_SHOP_TAB_MENU } from '@/app/utils/constant';
import { BuyingShopQuery } from '@/app/service';
import { useInput } from '@/app/hooks';
import { BuyingShopType } from '@/app/types/buyingShop';
import { useInView } from 'react-intersection-observer';
import { useEffect, FormEventHandler } from 'react';

import SearchIcon from '../../../../public/icons/search_wine.svg';

import Tabs from '@/app/_components/Tabs';
import style from './style.module.scss';
import Card from '@/app/_components/Card';
import Gap from '@/app/_components/Gap';
import Link from 'next/link';

export default function Page() {
  const { data: query, handleChange } = useInput<{ query: string }>({
    query: '',
  });
  const { current, toggleMenu } = useTabs({ menu: BUYING_SHOP_TAB_MENU });

  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    BuyingShopQuery.useGetBuyingShopList({
      storeType: current as BuyingShopType,
      query: query.query,
    });

  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetching]);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const isMobile = useMobile();

  return (
    <div className={style.buyingShopContainer}>
      <div className={style.header}>
        <h1 className={style.title}>롯데 와인 판매 매장 검색</h1>
        <p className={style.desc}>
          매장명 또는 해당 지역을 검색하시면 근처 매장들을 확인할 수 있습니다.
        </p>
        <div className={style.searchZone}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className={style.searchInput}
              placeholder="매장 검색"
              name="query"
              autoComplete="off"
              onChange={handleChange}
            />
          </form>
          <SearchIcon />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.tapZone}>
          <Tabs
            menu={BUYING_SHOP_TAB_MENU}
            toggle={toggleMenu}
            current={current}
          />
        </div>
        <div className={style.contentsZone}>
          {data?.map((store) => {
            return (
              <Link
                key={`${store.id}-${store.name}`}
                href={`/buying/${store.id}`}
              >
                <Card>
                  <Card.Img imgUrl={store.thumbnail} />
                  {isMobile ? <Gap columnGap={16} /> : <Gap columnGap={24} />}
                  <Card.Title title={store.name} />
                  {isMobile ? <Gap columnGap={4} /> : <Gap columnGap={16} />}
                  <Card.Text text={store.mobile} />
                </Card>
              </Link>
            );
          })}
          {hasNextPage && (
            <div ref={ref} style={{ height: 60, width: '100%' }} />
          )}
        </div>
      </div>
    </div>
  );
}
