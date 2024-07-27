import style from './style.module.scss';
import cx from 'classnames';

export default function Gap({ columnGap }: { columnGap: number }) {
  const className = cx(style.default, {
    [style[`gap-${columnGap}`]]: columnGap > 0,
  }
);

  return <div className={className} />;
}
