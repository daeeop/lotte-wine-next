'use client';

import style from './style.module.scss';
import cx from 'classnames';
import { useSelectedLayoutSegment, useSearchParams } from 'next/navigation';
import { getPageBanner } from '@/app/utils/getBanner';

export default function PageBanner() {
  const segment = useSelectedLayoutSegment();

  const searchParams = useSearchParams();

  const bannerInfo = getPageBanner(segment, searchParams.get('q')!);

  if (segment === 'home') return null;

  return (
    <div className={cx(style.bannerContainer, bannerInfo?.long && style.long)}>
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
