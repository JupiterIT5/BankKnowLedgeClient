import style from './creditcard.module.scss'
import icon1 from '../../../../images/icons/content/creditCard/1.png'
import icon2 from '../../../../images/icons/content/creditCard/2.png'
import icon3 from '../../../../images/icons/content/creditCard/3.png'
import icon4 from '../../../../images/icons/content/creditCard/4.png'
import icon5 from '../../../../images/icons/content/creditCard/5.png'
import icon6 from '../../../../images/icons/content/creditCard/6.png'
import icon7 from '../../../../images/icons/content/creditCard/7.png'
import icon8 from '../../../../images/icons/content/creditCard/8.png'
import icon9 from '../../../../images/icons/content/creditCard/9.png'
import icon10 from '../../../../images/icons/content/creditCard/10.png'
import icon11 from '../../../../images/icons/content/creditCard/11.png'
import icon12 from '../../../../images/icons/content/creditCard/12.png'

const CreditCard = () => {
	return (
		<section className={style.contentContainer}>
			<h2 className={style.title}>Что такое кредитная карта?</h2>
			<h3 className={style.definition}>
				<span>Кредитная карта - </span> это продукт, который совмещает в себе
				преимущества кредитной карты и кредита наличными
			</h3>
			<div className={style.premium}>
				<div>
					<img src={icon1} alt='...' />
					<p>Мгновенный и бесплатный выпуск карты</p>
				</div>
				<div>
					<img src={icon2} alt='...' />
					<p>
						Кредитный лимит до 5 000 000 ₽ (увеличивается при подключении
						программы финансовой защиты)
					</p>
				</div>
				<div>
					<img src={icon3} alt='...' />
					<p>Выгодная ставка по операциям покупок от 17,9%</p>
				</div>
				<div>
					<img src={icon4} alt='...' />
					<p>
						Скидки, кешбэк и подарки за покупки по программе лояльности от
						Платежной системы
					</p>
				</div>
				<div>
					<img src={icon5} alt='...' />
					<p>Возобновление кредитного лимита после полного погашения</p>
				</div>
				<div>
					<img src={icon6} alt='...' />
					<p>Удобный фиксированный платеж</p>
				</div>
				<div>
					<img src={icon7} alt='...' />
					<p>Возможность оформить финансовую защиту*</p>
				</div>
				<div>
					<img src={icon8} alt='...' />
					<p>
						Бесконтактная оплата с помощью сервисов СБПэй, Mir Pay или по
						QR-коду через СБП
					</p>
				</div>
				<h3>
					* Сотрудникам П1 доступно оформление карты без программы страхования
				</h3>
			</div>
			<h2 className={style.title}>Что важно знать о кредитной карте</h2>
			<div className={style.info}>
				<div className={style.infoContainer}>
					<img src={icon9} alt='' />
					<li>Возобновляемый лимит</li>
					<li>Формирование даты платежа</li>
					<li>Процесс оформления и выдачи карты</li>
					<li>Консультирование и обслуживание по продукту</li>
					<li>льготный период 120 дней</li>
				</div>
				<div className={style.infoContainer}>
					<img src={icon10} alt='' />
					<h3>Сходство с кредитом наличными:</h3>
					<li>Погашение равными платежами</li>
					<li>Сумма до 5 млн рублей</li>
					<li>Возможность подключения программы финансовой защиты</li>
				</div>
				<div className={style.infoContainer}>
					<img src={icon11} alt='' />
					<h3>Особенности:</h3>
					<li>
						Возобновление лимита только после полного погашения задолженности
					</li>
					<li>
						Комиссия за снятие/перевод денежных средств уменьшает доступный
						лимит
					</li>
					<li>Уменьшение лимита возможно по запросу Клиента</li>
					<li>
						Увеличение лимита при позитивной истории пользования продуктом
					</li>
				</div>
			</div>
			<div className={style.table}>
			<h2 className={style.title}>Что важно знать о кредитной карте</h2>
			
				<h3>Процентная ставка и обязательный ежемесячный платёж зависят от кредитного лимита:</h3>
				<img src={icon12} alt="" />
			</div>
		</section>
	)
}

export default CreditCard
