import { Link } from 'react-router-dom'
import style from './Header.module.scss'
function Header() {
    return (
        <div className={style['wrapper']}>
            <div className={style['wrapper-wdth']}>
                <div className={style['wrapper-logo']}>
                    <div className={style['logo']}></div>
                    <div className={style['jobored']}>Jobored</div>
                </div>
                <div className={style['wrapper-nav']}>
                    <p>
                        <Link to={'/'}>Поиск Вакансий</Link>
                    </p>
                    <p>
                        <Link to={'/favorites'}> Избранное</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header