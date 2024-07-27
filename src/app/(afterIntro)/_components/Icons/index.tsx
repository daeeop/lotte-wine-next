import style from './style.module.scss';
import PPT from '../../../../../public/icons/ppt.svg';
import SHARE from '../../../../../public/icons/share.svg';
import PRINT from '../../../../../public/icons/print.svg';

type Props = {
  pptVisible?: boolean;
};

export default function Icons({ pptVisible = false }: Props) {
  return (
    <div className={style.iconWrapper}>
      <SHARE />
      <PRINT />
      {pptVisible && <PPT />}
    </div>
  );
}
