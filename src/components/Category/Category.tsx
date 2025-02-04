import style from './category.module.scss'
import piggyBank from '../../images/icons/category/piggyBank.png'
import creditNal from '../../images/icons/category/creditNal.png'
import autoCredit from '../../images/icons/category/autoCredit.png'
import card from '../../images/icons/category/card.png'
import finance from '../../images/icons/category/finance.png'
import mortgage from '../../images/icons/category/mortgage.png'

const Category = () => {

	const nextPage = (page: string) => {
		window.location.href = `/${page}`
	} 

	return (
		<section className={style.section__category}>
			<h4 className={style.tag}>Продукты и услуги</h4>
			<div className={style.listCategory}>
				<div className={style.category} onClick={() => nextPage('piggyBank')}>
					<img src={piggyBank} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Накопительный счёт</h2>
				</div>
				<div className={style.category} onClick={() => nextPage('autoCredit')}>
					<img src={autoCredit} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Автокредит</h2>
				</div>
				<div className={style.category} onClick={() => nextPage('kidsCard')}>
					<img src={card} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Дебетовая карта</h2>
				</div>
				<div className={style.category} onClick={() => nextPage('creditCard')}>
					<img src={card} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Кредитная карта</h2>
				</div>
				<div className={style.category} onClick={() => nextPage('mortgage')}>
					<img src={mortgage} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Ипотека</h2>
				</div>
				<div className={style.category} onClick={() => nextPage('financeProtect')}>
					<img src={finance} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Финансовая защита</h2>
				</div>
				<div className={style.category} onClick={() => nextPage('creditNal')}>
					<img src={creditNal} alt='...' className={style.categoryIcon} />
					<h2 className={style.categoryName}>Потребительский кредит</h2>
				</div>
			</div>
		</section>
	)
}

export default Category
