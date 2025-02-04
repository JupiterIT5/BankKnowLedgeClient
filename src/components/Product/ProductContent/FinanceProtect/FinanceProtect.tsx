import style from './financeprotect.module.scss'
import icon1 from '../../../../images/icons/content/financeProtect/1.png'
import icon2 from '../../../../images/icons/content/financeProtect/2.png'
import icon3 from '../../../../images/icons/content/financeProtect/3.png'
import icon4 from '../../../../images/icons/content/financeProtect/4.png'
import icon5 from '../../../../images/icons/content/financeProtect/5.png'
import icon6 from '../../../../images/icons/content/financeProtect/6.png'

const FinanceProtect = () => {
	return (
		<section className={style.contentContainer}>
			<h2 className={style.title}>Финансовая защита</h2>
			<h3 className={style.definition}>
				Финансовая защита – это помощь Клиенту в непростых ситуациях связанных
				со здоровьем, имуществом и/или работой, а также в погашении кредита за
				счет страхового покрытия (страховой выплаты) при его наличии. Сумма
				финансовой защит в месяц составляет всего лишь 2% от общей суммы
				кредитования
			</h3>
			<div className={style.services}>
				<div className={style.serviceContainer}>
					<img src={icon1} alt='' />
					<p>
						Выплаты при наступлении страхового случая, которые позволяют
						полностью или частично погасить задолженность по кредиту (при
						наличии), что становится финансовой поддержкой как для Клиента, так
						и для его родственников в непростой жизненной ситуации
					</p>
				</div>
				<div className={style.serviceContainer}>
					<img src={icon2} alt='' />
					<p>
						Снижение ставки по кредиту наличными при оформлении Финансовой
						защиты к кредиту Оптимистичный
					</p>
				</div>
				<div className={style.serviceContainer}>
					<img src={icon3} alt='' />
					<p>
						Возможность сохранить свою кредитную историю и не допустить
						просрочек по кредиту при наступлении страхового случая
					</p>
				</div>
			</div>
			<h2 className={style.title}>Ценность финансовой защиты</h2>
			<div className={style.advice}>
				<h3>
					Часто, сталкиваясь с трудностями, люди попадают в финансовую яму и не
					знают, что им делать. Им негде искать материальной помощи и моральной
					поддержки.
				</h3>
				<div className={style.adviceContainer}>
					<div>
						<p>
							<span>1</span>Каждый месяц семья расходует общий бюджет на
							различные статьи.
						</p>
						<img src={icon4} alt='' />
					</div>
					<div>
						<p>
							<span>2</span>При наступлении страхового случая с одним из членов
							семьи, семейный бюджет лишается своей основной части.
						</p>
						<img src={icon5} alt='' />
					</div>
					<div>
						<p>
							<span>3</span>Семье не хватает денег на обычные потребности не
							говоря уже об оплате кредита.
						</p>
						<img src={icon6} alt='' />
					</div>
				</div>
				<h2>
					А если бы Клиент заранее оформил финансовую защиту, он получил бы
					финансовую помощь
				</h2>
				<h4>Пример:</h4>
				<p>
					Обратился Клиент, оформивший кредит на 150.000 рублей и застрахованный
					по программе «Оптимум +» от страховой компании «СОГАЗ». Согласно
					представленным медицинским документам в результате падения зимой
					Клиенту присвоили <span>инвалидность II группы</span>. Выплата{' '}
					<span>
						составила 150 000 рублей, кредит был полностью погашен, а остальная
						сумма потрачена на лечение.
					</span>
				</p>
			</div>
			<h2 className={style.title}>Основные термины и определения</h2>
			<div className={style.definitionsGroup}>
				<p>
					<span>Застрахованное лицо/Страхователь</span> – Клиент, который
					заключил договор страхования.
				</p>
				<p>
					<span>Страховщик</span> – страховая компания, которая осуществляет
					страхование.
				</p>
				<p>
					<span>Программа страхования</span> – совокупность рисков и условий по
					страхованию
				</p>
				<p>
					<span>Срок страхования</span> – период времени, в течение которого
					страховая компания осуществляет защиту Клиента по программе
					страхования
				</p>
				<p>
					<span>Cтраховая сумма</span> – максимальная сумма, указанная в
					договоре страхования, по которой устанавливается размер страховой
					премии и страховой
				</p>
				<p>
					<span>Страховая выплата</span> – сумма, которую получает
					Выгодоприобретатель при наступлении страхового случая от СК
				</p>
				<p>
					<span>Страховой случай</span> – событие, при котором у Страховщика
					возникает обязанность произвести страховую выплату
				</p>
				<p>
					<span>Страховая премия</span> – плата за страхование
				</p>
				<p>
					<span>Риск</span> – вероятность наступления неблагоприятных событий
					(уход из жизни, инвалидность, травма)
				</p>
				<p>
					<span>Недобровольная потеря работы</span> – потеря работы по причине
					увольнения, сокращения или ликвидации организации
				</p>
				<p>
					<span>Смерть НС и Б</span> – смерть в результате несчастного случая
					или болезни
				</p>
				<p>
					<span>Инвалидность НС и Б</span> – наступление инвалидности в
					результате несчастного случая или болезни
				</p>
				<p>
					<span>Выгодоприобретатель</span> – тот, кто получает страховую выплату
					(Клиент, родственники,{' '}
				</p>
			</div>
		</section>
	)
}

export default FinanceProtect
