'use client';

import style from './style.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.left_section}>
          <div className={style.logo_zone}>
            <Image
              className={style.logo}
              src={'/images/logo_gray.png'}
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
              sizes="100vw"
              alt="footer_logo"
            />
          </div>
          <div className={style.info_zone}>
            <div className={style.box}>
              <address className={style.text} style={{ whiteSpace: 'nowrap' }}>
                주소 : 서울특별시 송파구 올림픽로 269 롯데캐슬골드 3층
              </address>
              <p className={style.text}>대표이사 : 박윤기</p>
            </div>
            <p className={style.text}>TEL : 080-333-2323 (고객센터)</p>
            <p className={style.text}>
              사업자등록번호 : 214-81-07770 (사업장 소재지 : 서울특별시 서초구
              서초대로 70길 15)
            </p>
            <p className={style.text}>
              Copyright © 2024 LOTTE CHILSUNG BEVERAGE CO.,LTD. ALL RIGHTS
              RESERVED
            </p>
          </div>
        </div>
        <div className={style.right_section}>
          <select>
            <option>롯데칠성음료</option>
            <option>롯데그룹</option>
            <option>롯데온</option>
            <option>칠성몰</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
