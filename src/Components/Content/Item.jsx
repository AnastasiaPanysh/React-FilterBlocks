import style from './style.module.scss'

function Item({ vacancy, salary, workday, city }) {
  return (
    <div className={style['wrapper']}>
      <h2>{vacancy}</h2>
      <div>
        <p>{salary}</p>
        <p>{workday}</p>
      </div>
      <p>{city}</p>
    </div>
  );
}

export default Item;
