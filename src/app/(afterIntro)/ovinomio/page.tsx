import style from './style.module.scss';
import filpTexts from './flip-data';

export default function Ovinomio() {
  return (
    <div className={style.container}>
      <div className={style.header}></div>
      <div className={style.cardFilpWrapper}>
        {filpTexts.map((text) => {
          return (
            <div className={style.card} key={text.frontLabel}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <p className={style.cardText}>{text.frontLabel}</p>
                </div>
                <div className={style.cardBack}>
                  <p className={style.cardText}>{text.backLabel}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
