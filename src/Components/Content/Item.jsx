import style from "./style.module.scss";
import React, { useState } from 'react';

function Item({ profession, type_of_work, payment_from,town }) {
  const [isSaved, setIsSaved] = useState(false);


  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
    addToFavorites(vacancyItem);
  };
  
  return (
    <div className={style['wrapper']}>
    <div className={style['content']}>
      <div className={style['wrapper-vac']}>
        <h2 className={style['vacancy-h']}>{profession}</h2>
        <div
          onClick={handleSaveToggle}
          className={`${style[isSaved ? 'save' : 'nosave']}`}
        ></div>
      </div>

      <div className={style['flex']}>

      {payment_from != 0 && <p className={style['salary']}>з/п от {payment_from} rub</p>}
        <p>{type_of_work.title}</p>
      </div>

      <div className={style['location']}>
        <div className={style['img']}></div>
        <p>{town.title}</p>
      </div>
    </div>
  </div>
  );
}

export default Item;
