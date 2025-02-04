import style from './mortgage.module.scss'
import icon1 from '../../../../images/icons/content/creditNal/1.png'
import icon2 from '../../../../images/icons/content/creditNal/2.png'
import icon3 from '../../../../images/icons/content/creditNal/3.png'
import icon4 from '../../../../images/icons/content/creditNal/4.png'
import icon5 from '../../../../images/icons/content/creditNal/5.png'
import icon6 from '../../../../images/icons/content/creditNal/6.png'
import icon7 from '../../../../images/icons/content/creditNal/7.png'
import icon8 from '../../../../images/icons/content/creditNal/8.png'
import icon9 from '../../../../images/icons/content/creditNal/9.png'

const Mortgage = () => {
	return (
		<section className={style.contentContainer}>
			<h2 className={style.title}>Ипотека</h2>
			<h3 className={style.definition}>
				<span>Ипотека -</span>
				<h5>получение денежных средств у Банка для приобретения жилья своей мечты</h5>
			</h3>
			<h3 className={style.text}>Почта банк предлагает кредиты:</h3>
			<div className={style.creditContainers}>
				<div className={style.creditContainer}>
					<img src={icon1} alt='...' />
					<div className={style.creditDesc}>
						<li>до 15 млн. ₽ сумма кредита «на руки»</li>
						<li>от 3 до 5 лет срок кредита</li>
						<li>от 32% ставки по кредиту </li>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon3} alt='...' />
					<div className={style.creditDesc}>
						<p>
							<span>Быстрый доступ</span> ко всем операциям по кредиту в{' '}
							<span>приложении банка</span>, не выходя из дома, в том числе
							оформление и погашение кредита
						</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon2} alt='...' />
					<div className={style.creditDesc}>
						<h3>Возможность снижения базовой % ставки:</h3>
						<li>до -2% с пакетом услуг «Финансовая защита»</li>
						<li>-1,5% для пенсионных Клиентов</li>
						<li>-1,5% для зарплатных Клиентов</li>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon4} alt='...' />
					<div className={style.creditDesc}>
						<h3>Удобное управление кредитом с сервисами:</h3>
						<li>Все под контролем</li>
						<li>Легкое пополнение</li>
						<li>Автопогашение</li>
					</div>
				</div>
			</div>
			<h2 className={style.title}>Требования к заёмщику и документам</h2>
			<div className={style.require}>
				<div className={style.requireName}>
					<img src={icon5} alt='' />
					<h2>
						Требование
						<br />к Заемщику/Созаёмщику
					</h2>
				</div>
				<div className={style.requireDesc}>
					<li>Гражданство РФ</li>
					<li>Постоянная регистрация в любом регионе РФ</li>
					<li>Возраст: от 18 до 75 лет на момент заведения заявки</li>
					<li>
						Стаж работы: от 3-х месяцев на последнем месте работы / от 3-х
						месяцев осуществления деятельности для физических лиц, являющихся
						плательщиками налога на профессиональный доход
					</li>
					<li>Отсутствие активных просрочек по действующим кредитам</li>
					<li>Наличие собственного мобильного телефона</li>
					<li>
						Наличие контактного/домашнего* телефона и рабочего (требование по
						указанию рабочего телефона не применяется для неработающих
						пенсионеров)
					</li>
				</div>
				<div className={style.requireName}>
					<img src={icon6} alt='' />
					<h2>
						Список документов
						<br />
						для Заемщика/Созаёмщика
					</h2>
				</div>
				<div className={style.requireDesc}>
					<li>Паспорт Гражданина РФ</li>
					<li>Номер СНИЛС</li>
					<li>
						ИНН работодателя. Для лиц, являющихся плательщиками налога на
						профессиональный доход - ИНН физического лица – Клиента
					</li>
					<li>Подтверждение дохода</li>
					<li>
						Пенсионное удостоверение/справка из СФР об установлении пенсии
						(требование не применяется для пенсионеров по возрасту и
						Клиентов-пенсионеров, получающих пенсию на счет в Почта Банке)
					</li>
				</div>
			</div>
			<h2 className={style.title}>Посдствия пропуска платежа по кредиту</h2>
			<div className={style.consequencesContainer}>
				<div className={style.consequences}>
					<img src={icon7} alt='' />
					<h2>Увеличение финансовой нагрузки</h2>
					<h3>Клиенту нужно оплатить просроченный платеж + неустойку</h3>
					<h3>Неустойка 20% годовых:</h3>
					<li>
						• начисляется ежедневно на сумму просроченного основного долга и
						просроченных %
					</li>
					<li>• не начисляется на комиссии</li>
					<li>
						• включается в ближайший платеж после полного погашения просроченной
						задолженности
					</li>
					<h3>При пропуске платежа не производится пересчёт процентов по услуге "Низкая ставка" в рамках пакета "Большая выгода"</h3>
				</div>
				<div className={style.consequences}>
					<img src={icon8} alt='' />
					<h2>Обнуление кредитного лимита по КК</h2>
					<li>• Лимит по кредитным картам будет не доступен</li>
					<li>
						• Лимит возобновляется на следующий день после оплаты платежа по
						Потребительскому кредиту
					</li>
				</div>
				<div className={style.consequences}>
					<img src={icon9} alt='' />
					<h2>Ухучшение кредитной истории</h2>
					<li>• Кредитная история передается в БКИ* и доступна всем банкам</li>
					<li>• Срок хранения истории в БКИ – 7 лет</li>
					<li>
						• Плохая кредитная история снижает вероятность одобрения по
						кредитным продуктам
					</li>
					<h3>
						*БКИ - организации, оказывающие услуги по формированию, обработке и
						хранению кредитных историй, а также по предоставлению кредитных
						отчетов
					</h3>
				</div>
			</div>
		</section>
	)
}

export default Mortgage
