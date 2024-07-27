'use client';

import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from 'react-kakao-maps-sdk';
import style from './style.module.scss';

type Props = {
  lat: number;
  lng: number;
  name: string;
};

export default function KaKaoMap({ lat, lng, name }: Props) {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_KEYS!,
    libraries: ['clusterer', 'drawing', 'services'],
  });
  const onLoad = () => {
    if (window.kakao && window.kakao.maps)
      kakao.maps.load(() => {
        console.log('카카오 맵 로드 완료');
      });
  };
  return (
    <>
      <div className={style.mapWrapper}>
        <Map
          className={style.map}
          center={{
            lat: lat,
            lng: lng,
          }}
          zoomable={false}
          draggable={false}
        >
          <MapMarker position={{ lat: lat, lng: lng }} />
        </Map>
      </div>
    </>
  );
}

/*{/* <Script src="https://developers.kakao.com/sdk/js/kakao.js" /> 공유하기 전용 */
