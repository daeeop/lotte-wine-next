'use client';

import { useRouter } from 'next/navigation';
import { BuyingShopQuery } from '@/app/service';
import style from './buyingShopDetail.module.scss';
import Labels from '@/app/(afterIntro)/_components/Labels';
import Icons from '@/app/(afterIntro)/_components/Icons';
import KaKaoMap from '@/app/(afterIntro)/_components/Map';
import cx from 'classnames';
import { useMobile } from '@/app/hooks';

type Props = {
  shopId: string;
};

export default function BuyingShopDetail({ shopId }: Props) {
  const { data, isLoading } = BuyingShopQuery.useGetBuyingShopDetails(shopId);
  const router = useRouter();
  const isMobile = useMobile();

  const handleRouter = () => {
    router.back();
  };

  if (isLoading) return null;

  return (
    <section className={style.buyingShopDetailsWrapper}>
      <div className={style.buyingShopPublicInfo}>
        <div className={style.buyingShopThumbNail}>
          <img src={data?.thumbnail} alt="store-thumbnail" />
        </div>

        <div className={style.buyingShopInfo}>
          <Labels text={data?.storeType as string} />
          <h1 className={style.title}>{data?.name}</h1>
          <div className={style.iconArea}>
            <Icons />
          </div>

          <div className={style.publicInfo}>
            <div className={style.textBox}>
              <p>주소</p>
              <p>{data?.mainAddress}</p>
            </div>

            <div className={style.textBox}>
              <p>전화</p>
              <p>{data?.mobile}</p>
            </div>

            <div className={style.textBox}>
              <p>운영시간</p>
              <p>{data?.operate}</p>
            </div>

            <div className={style.textBox}>
              <p>휴무일</p>
              <p>{data?.dayOff}</p>
            </div>
            {data?.parking && (
              <>
                <div className={style.textBox}>
                  <p>주차시설</p>
                  <p>주차가능 </p>
                </div>
              </>
            )}

            <div className={style.line} />
            <div className={style.textBox}>
              <p>소개</p>
              <p dangerouslySetInnerHTML={{ __html: data?.content! }} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.mapArea}>
        <h3>찾아오시는길</h3>
        <KaKaoMap
          lat={data?.latitude!}
          lng={data?.longitude!}
          name={data?.name!}
        />
        <div className={style.trafficInfoArea}>
          <div className={cx(style.textBox, style.traffic)}>
            <p>지하철</p>
            <p>{data?.subway}</p>
          </div>
          {data?.bus && (
            <div className={cx(style.textBox, style.traffic)}>
              <p>버스</p>
              <p>{data?.bus}</p>
            </div>
          )}
          {data?.car && (
            <div className={cx(style.textBox, style.traffic)}>
              <p>자차이용</p>
              <p>{data?.car}</p>
            </div>
          )}
        </div>
      </div>
      <div className={style.buttonArea}>
        <button type="button" onClick={handleRouter} color="#000">
          목록으로
        </button>
      </div>
    </section>
  );
}
