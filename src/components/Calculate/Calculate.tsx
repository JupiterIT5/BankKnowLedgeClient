import { useMemo, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './calculate.module.scss'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IGetBidAdmin, IProductAdmin } from '../../interface/product.interface'

const Calculate = () => {
	const [productName, setProductName] = useState<string>('Кредит наличными')
	const [creditTime, setCreditTime] = useState<number>(12)
	const [creditLimit, setCreditLimit] = useState<number>(0)
	const [productAll, setProductAll] = useState<Array<IProductAdmin>>([])
	const [bidAll, setBidAll] = useState<Array<IGetBidAdmin>>([])
	const [bid, setBid] = useState<number>(30)
	const [paymentMonth, setPaymentMonth] = useState<number>(0)
	const [financeMonth, setFinanceMonth] = useState<number>(0)
	const [overPayment, setOverPayment] = useState<number>(0)
	const [sumPayment, setSumPayment] = useState<number>(0)
	const [sumFinance, setSumFinance] = useState<number>(0)
	const [financeBool, setFinanceBool] = useState<boolean>(false)

	useQuery({
		queryKey: ['getAllDataParam'],
		queryFn: async () => {
			try {
				const { data } = await axios.get(
					'http://178.253.43.132:3000/product-data/getall'
				)
				setProductAll(data.productAll)
				setBidAll(data.bidsAll)
				return data
			} catch (err) {
				return
			}
		},
	})

	useMemo(() => {
		setFinanceMonth(0)
		setSumFinance(0)
		if (financeBool == true) {
			setFinanceMonth(Math.round(creditLimit / 100 * bidAll[0].bid))
			setSumFinance(Math.round(creditLimit / 100 * bidAll[0].bid * creditTime))
			setSumPayment(creditLimit + Math.round(creditLimit / 100 * bidAll[0].bid * creditTime))
			setPaymentMonth(Math.round(creditLimit / creditTime) + Math.round(creditLimit / 100 * bidAll[0].bid))
			setOverPayment(Math.round(creditLimit / 100 * bid) + Math.round(creditLimit / 100 * bidAll[0].bid * creditTime))
			return
		}
		if (creditTime !== 0) {
			setPaymentMonth(Math.round(creditLimit / creditTime))
		}
		if (bidAll.length > 0) {
			setOverPayment(Math.round(creditLimit / 100 * bid))
		}
		setSumPayment(creditLimit)
	}, [productName, bid, creditLimit, creditTime, financeBool])

	return (
		<>
			<Header />
			<section className={style.calculateContainer}>
				<div className={style.calculate}>
					<h2>Калькулятор</h2>
					<div className={style.inputContainer}>
						<h3>Выберите продукт</h3>
						<select
							className={style.productName}
							onChange={e => setProductName(e.target.value)}
						>
							<option disabled>Выберите продукт</option>
							<option>Кредит наличными</option>
							<option>Автокредит</option>
							<option>Ипотека</option>
						</select>
						<h3>Выберите время кредита (в месяцах)</h3>
						<div className={style.creditTimeContainer}>
							{productAll.length > 0 && productName == 'Кредит наличными' ? (
								<>
									<input
										type='number'
										readOnly
										value={creditTime}
										defaultValue={productAll[0].minTime}
									/>
									<input
										type='range'
										min={productAll[0].minTime}
										max={productAll[0].maxTime}
										step={12}
										onChange={e => setCreditTime(parseInt(e.target.value))}
										defaultValue={productAll[0].minTime}
									/>
								</>
							) : productName == 'Автокредит' ? (
								<>
									<input
										type='number'
										readOnly
										value={creditTime}
										defaultValue={productAll[2].minTime}
									/>
									<input
										type='range'
										min={productAll[2].minTime}
										max={productAll[2].maxTime}
										step={12}
										onChange={e => setCreditTime(parseInt(e.target.value))}
										defaultValue={productAll[2].minTime}
									/>
								</>
							) : productName == 'Ипотека' ? (
								<>
									<input
										type='number'
										readOnly
										value={creditTime}
										defaultValue={productAll[1].minTime}
									/>
									<input
										type='range'
										min={productAll[1].minTime}
										max={productAll[1].maxTime}
										step={12}
										onChange={e => setCreditTime(parseInt(e.target.value))}
										defaultValue={productAll[1].minTime}
									/>
								</>
							) : (
								''
							)}
						</div>
						<h3>Выберите кредитный лимит (в руб.)</h3>
						<div className={style.creditLimit}>
							{productAll.length > 0 && productName == 'Кредит наличными' ? (
								<>
									<input
										type='number'
										readOnly
										value={creditLimit}
										defaultValue={productAll[0].minLimit}
									/>
									<input
										type='range'
										min={productAll[0].minLimit}
										max={productAll[0].maxLimit}
										step={100}
										onChange={e => setCreditLimit(parseInt(e.target.value))}
										defaultValue={productAll[0].minLimit}
									/>
								</>
							) : productName == 'Автокредит' ? (
								<>
									<input
										type='number'
										readOnly
										value={creditLimit}
										defaultValue={productAll[2].minLimit}
									/>
									<input
										type='range'
										min={productAll[2].minLimit}
										max={productAll[2].maxLimit}
										step={100}
										onChange={e => setCreditLimit(parseInt(e.target.value))}
										defaultValue={productAll[2].minLimit}
									/>
								</>
							) : productName == 'Ипотека' ? (
								<>
									<input
										type='number'
										readOnly
										value={creditLimit}
										defaultValue={productAll[1].minLimit}
									/>
									<input
										type='range'
										min={productAll[1].minLimit}
										max={productAll[1].maxLimit}
										step={100}
										onChange={e => setCreditLimit(parseInt(e.target.value))}
										defaultValue={productAll[1].minLimit}
									/>
								</>
							) : (
								''
							)}
						</div>
						<h3>Ставка %</h3>
						{bidAll.length > 0 && <input type='text' value={bid} disabled className={style.bid} />}
						<div className={style.checked}>
							<input type='checkbox' name='check' className={style.checkbox} onClick={(e) => {
								setBid(e.currentTarget.checked ? bid - bidAll[0].bid : bid + bidAll[0].bid)
								setFinanceBool(!financeBool)
							}} />
							<h4>Финансовая защита</h4>
						</div>
						<div className={style.checked}>
							<input type='checkbox' name='check' className={style.checkbox} onClick={(e) => {
								setBid(e.currentTarget.checked ? bid - bidAll[1].bid : bid + bidAll[1].bid)
								}} />
							<h4>Зарплат. клиент</h4>
						</div>
						<div className={style.checked}>
							<input type='checkbox' name='check' className={style.checkbox} onClick={(e) => {
								setBid(e.currentTarget.checked ? bid - bidAll[2].bid : bid + bidAll[2].bid)
								}} />
							<h4>Пенсион. клиент</h4>
						</div>
						<div className={style.sum}>
							<h3>Ежемесячный платёж</h3>
							<input type='text' disabled value={paymentMonth} />
							<h3>Стоимость фин. защиты (в месяца)</h3>
							<input type='text' disabled value={financeMonth} />
							<h3>Сумма переплат</h3>
							<input type='text' disabled value={overPayment} />
							<h3>Общая сумма кредита</h3>
							<input type='text' disabled value={sumPayment} />
							<h3>Общая сумма фин. защита</h3>
							<input type='text' disabled value={sumFinance} />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Calculate
