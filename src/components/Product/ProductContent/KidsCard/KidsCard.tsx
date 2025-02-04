import style from './kidscard.module.scss'
import icon1 from '../../../../images/icons/content/kidsCard/1.png'
import icon2 from '../../../../images/icons/content/kidsCard/2.png'
import icon3 from '../../../../images/icons/content/kidsCard/3.png'
import icon4 from '../../../../images/icons/content/kidsCard/4.png'
import icon5 from '../../../../images/icons/content/kidsCard/5.png'
import icon6 from '../../../../images/icons/content/kidsCard/6.png'
import icon7 from '../../../../images/icons/content/kidsCard/7.png'

const KidsCard = () => {
	return (
		<section className={style.contentContainer}>
			<h2 className={style.title}>Дебетовая карта</h2>
			<h3 className={style.definition}>
				<span>Дебетовая карта - </span> это карта, с встроенной программой
				лояльности, позволяющей получать кэшбэк за все покупки на свой бонусный
				счет за покупки по основной и всем дополнительные картам тарифа за
				календарный месяц.
			</h3>
			<h3 className={style.text}>Почта банк предлагает кредиты:</h3>
			<div className={style.creditContainers}>
				<div className={style.creditContainer}>
					<img src={icon1} alt='...' />
					<div className={style.creditDesc}>
						<p>
							до <span>5%</span> максимальный кешбэк, в т.ч. 1% на все
						</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon2} alt='...' />
					<div className={style.creditDesc}>
						<p>
							до <span>30%</span> кешбэк, скидки и подарки за покупки по
							программе лояльности от Платежной системы МИР
						</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<div className={style.creditDesc}>
						<div>
							<img src={icon3} alt='...' />
							<p>
								3 категории повышенного кешбэка по выбору Клиента (в т.ч. 1% на
								все)
							</p>
						</div>
						<p>
							Клиент может выбрать 3 категории с повышенным кешбэком и не
							выбирать 1% на все
							<br />
							<br />
							Или выбрать 2 категории с повышенным кешбэком и выбирать 1% на все
						</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon4} alt='...' />
					<div className={style.creditDesc}>
						<h3>Бесплатный выпуск 1-й карты</h3>
						<p>499 ₽ – комиссия за выпуск 2-й и последующих карт на пластике</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon5} alt='...' />
					<div className={style.creditDesc}>
						<p>Возможность выпустить карту в формате стикера</p>
					</div>
				</div>
			</div>
			<h2 className={style.title}>Требования к заёмщику и документам</h2>
			<div className={style.require}>
				<div className={style.requireName}>
					<img src={icon6} alt='' />
					<h2>Кому оформляется?</h2>
				</div>
				<div className={style.requireDesc}>
					<h2>Для граждан РФ</h2>
					<p>Гражданам РФ от 14 лет</p>
				</div>
				<div className={style.requireDesc}>
					<h2>Для граждан иностранных государств</h2>
					<p>Гражданам иностранного государства от 18 лет</p>
				</div>
				<div className={style.requireName}>
					<img src={icon7} alt='' />
					<h2>Что нужно для оформления?</h2>
				</div>
				<div className={style.requireDesc}>
					<li>Паспорт РФ</li>
					<li>
						Собственный номер мобильного телефона*
						<br />
						Если в паспорте Клиента отсутствует штамп о регистрации, то при
						заведении заявки в ПО Siebel необходимо указать данные о регистрации
						и проживании со слов Клиента
					</li>
				</div>
				<div className={style.requireDesc}>
					<li>Паспорт иностранного гражданина / заграничный паспорт</li>
					<li>Документ, подтверждающий право находиться в РФ</li>
					<li>Собственный номер мобильного телефона*</li>
				</div>
			</div>
		</section>
	)
}

export default KidsCard
