import style from './piggybank.module.scss'
import icon1 from '../../../../images/icons/content/piggyBank/1.png'
import icon2 from '../../../../images/icons/content/piggyBank/2.png'
import icon3 from '../../../../images/icons/content/piggyBank/3.png'
import icon4 from '../../../../images/icons/content/piggyBank/4.png'
import icon6 from '../../../../images/icons/content/kidsCard/6.png'
import icon7 from '../../../../images/icons/content/kidsCard/7.png'

const PiggyBank = () => {
	return (
		<section className={style.contentContainer}>
			<h2 className={style.title}>Накопительный счёт</h2>
			<h3 className={style.definition}>
				<span>Накопительный счёт - </span> счёт с возможностью получать доход
				(как вклад, только бессрочный) и снимать денежные средства в любой
				момент
			</h3>
			<h3 className={style.text}>Вклады и накопительные счета обеспечивают:</h3>
			<div className={style.creditContainers}>
				<div className={style.creditContainer}>
					<img src={icon1} alt='...' />
					<div className={style.creditDesc}>
						<p>Гарантированное получение дохода</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon2} alt='...' />
					<div className={style.creditDesc}>
						<p>Выбор условий в зависимости от целей Клиента</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon3} alt='...' />
					<div className={style.creditDesc}>
						<p>Защиту от потери и нерациональных трат</p>
					</div>
				</div>
				<div className={style.creditContainer}>
					<img src={icon4} alt='...' />
					<div className={style.creditDesc}>
						<p>Надежное хранение собственных средств под защитой государства</p>
					</div>
				</div>
			</div>
			<h2 className={style.title}>Параметры накопительных счётов</h2>
			<table className={style.table}>
				<thead>
					<tr>
						<td>Параметры</td>
						<td>Накопительный счёт</td>
					</tr>
				</thead>
					<tr>
						<td>Кому оформляется</td>
						<td>Всем Клиентам, согласно требованиям к Клиентам, <span>кроме Клиентов с ТП Базовый</span>, у которых в предыдущем месяце минимальный остаток на каждом из счетов (Сберегательный счёт, Сейф-счёт) <span>был более 50 000 ₽</span></td>
					</tr>
					<tr>
						<td>Срок</td>
						<td>Бессрочно, пока Клиент самостоятельно не закроет счёт</td>
					</tr>
					<tr>
						<td>Сумма</td>
						<td>Минимальная сумма для начисления процентов 1 000 ₽</td>
					</tr>
					<tr>
						<td>Промо ставка</td>
						<td>
							<h4>19% годовых</h4>
							<h5><span>На один месяц</span>, в котором был открыт (не обязательно пополнен) счёт</h5>
							Если счёт открыт в последний день месяца, то промо-период уснавливается на следующий календарный месяц
							<p>Например:</p>
							счёт открыт 31.08 - промо период будет с 01.09 по 30.09<br/>
							счёт открыт 30.08 - промо период будет только 31.08
						</td>
					</tr>
					<tr>
						<td>Базовая ставка</td>
						<td>10% годовых</td>
					</tr>
					<tr>
						<td>Надбавка за кваллифицированные операции* от 10 000 ₽ в мес.</td>
						<td>5%<br/>На сумму до 10 млн. ₽</td>
					</tr>
					<tr>
						<td>Принцип начисления процентов</td>
						<td>На <span>ежедневный остаток</span> на счёте на начало дня</td>
					</tr>
					<tr>
						<td>Выплата процентов</td>
						<td>В последний день месяца на накопительный счёт</td>
					</tr>
					<tr>
						<td>Обслуживание счёта</td>
						<td><span>300 ₽, если:</span> нет операций по счётам в течение последнего года и нет вкладов и кредитов и остаток на счёте менее 10 000 ₽</td>
					</tr>
			</table>
			<h2 className={style.title}>Требования к Клиентам и документам</h2>
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

export default PiggyBank
