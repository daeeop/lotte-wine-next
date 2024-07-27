'use client';

import { useWindowScroll, useWindowSize } from 'react-use';
import { useMemo } from 'react';
import style from './style.module.scss';

export default function TopButton() {
  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  const isScrolled = useMemo(() => {
    return height <= y;
  }, [height, y]);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isScrolled) return null;

  return (
    <div onClick={handleScrollTop} className={style.topBtnContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        height={18}
        width={18}
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
      <p>맨위로</p>
    </div>
  );
}
