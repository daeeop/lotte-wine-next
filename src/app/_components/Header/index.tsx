'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import cx from 'classnames';
import style from './style.module.scss';

export default function Header() {
  const segment = useSelectedLayoutSegment();

  const isHome = segment === 'home';

  return (
    <header className={cx(style.header, isHome && style.absolute)}>
      Header
    </header>
  );
}
