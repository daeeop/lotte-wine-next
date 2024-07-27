import { PagePropsWithChildren } from '@/app/types/common';
import style from './style.module.scss';
import Image from 'next/image';
import cx from 'classnames';

const CardRoot = ({ children }: PagePropsWithChildren) => {
  return <div className={style.cardContainer}>{children}</div>;
};

const CardThumbNail = ({
  imgUrl,
  isExpandedHeight,
}: {
  imgUrl: string;
  isExpandedHeight?: boolean;
}) => {
  return (
    <div className={cx(style.cardImg, isExpandedHeight && style.expanded)}>
      {/* <Image src={imgUrl} alt="card-img" fill /> */}
      <img src={imgUrl} alt="card-img" />
    </div>
  );
};

const CardTitle = ({ title }: { title: string }) => {
  return <p className={style.title}>{title}</p>;
};

const CardText = ({ text, bold }: { text: string; bold?: boolean }) => {
  return <p className={cx(style.text, bold && style.bold)}>{text}</p>;
};

const Card = Object.assign(CardRoot, {
  Img: CardThumbNail,
  Title: CardTitle,
  Text: CardText,
});

export default Card;
