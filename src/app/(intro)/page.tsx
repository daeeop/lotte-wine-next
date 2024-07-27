import Image from 'next/image';
import style from './intro.module.scss';
import Link from 'next/link';

export default function Page() {
  return (
    <section className={style.container}>
      <Image
        src={'/images/intro_bg.png'}
        alt="intro_bg"
        fill
        overrideSrc={'./images/intro_bg_m.png'}
      />
      <div className={style.popup}>
        <div className={style.popup_logo_zone}>
          <Image
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            sizes="100vw"
            className={style.popup_logo}
            src={'/images/logo_red.png'}
            alt="popup_logo"
          />
        </div>

        <h3 className={style.popup_title}>
          만 19세 이상
          <br />
          음주 가능한 연령입니까?
        </h3>

        <div className={style.popup_btn_zone}>
          <Link href="/home">
            <p className={style.popup_btn}>YES</p>
          </Link>
          <span className={style.popup_hypen}>/</span>
          <p className={style.popup_btn}>NO</p>
        </div>
      </div>
      <div className={style.description}>
        <p className={style.text}>
          * 이 사이트는 만 19세 이상만 입장 가능합니다.
        </p>
      </div>
    </section>
  );
}
