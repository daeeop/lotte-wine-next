'use client';

import style from './style.module.scss';
import cx from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';
import { getPageBanner } from '@/app/utils/getBanner';

type Props = {
  pageParam?: { shop: string };
  long?: boolean;
};

export default function PageBanner({ pageParam, long }: Props) {
  const segment = useSelectedLayoutSegment();
  const bannerInfo = getPageBanner(segment);

  if (segment === 'home') return null;

  return (
    <div className={cx(style.bannerContainer, long && style.long)}>
      <picture>
        <source
          srcSet={bannerInfo?.mobileImg.src}
          media="all and (max-width : 768px)"
        />
        <img src={bannerInfo?.img.src} alt="banner-img" />
      </picture>
      <div className={style.textWrpaper}>
        <p className={style.cateogry}>{bannerInfo?.category}</p>
        <p className={style.label}>{bannerInfo?.label}</p>
      </div>
    </div>
  );
}
