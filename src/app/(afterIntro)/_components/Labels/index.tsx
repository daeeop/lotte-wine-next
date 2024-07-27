import style from './style.module.scss';
import cx from 'classnames';

type LabelProps = {
  text: string;
  bgColor?: 'wine';
};

export default function Labels({ text, bgColor = 'wine' }: LabelProps) {
  return (
    <div
      className={cx(style.labelContainer, {
        [style[`${bgColor}`]]: true,
      })}
    >
      {text}
    </div>
  );
}
