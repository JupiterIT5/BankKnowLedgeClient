import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { IUser } from '../../interface/user.interface'
import style from './adminlog.module.scss'
import { IGetBidAdmin, IProductAdmin } from '../../interface/product.interface'

const AdminLog = () => {
	const [active, setActive] = useState<Number>(1)
	const [check, setCheck] = useState<boolean>(false)
	const [mortgage, setMortgage] = useState<IProductAdmin>({
		minLimit: 0,
		maxLimit: 0,
		minTime: 0,
		maxTime: 0,
	})
	const [autocredit, setAutoCredit] = useState<IProductAdmin>({
		minLimit: 0,
		maxLimit: 0,
		minTime: 0,
		maxTime: 0,
	})
	const [creditNal, setCreditNal] = useState<IProductAdmin>({
		minLimit: 0,
		maxLimit: 0,
		minTime: 0,
		maxTime: 0,
	})
	const [bidsFinance, setBidsFinance] = useState<number>(1)
	const [bidsSalary, setBidsSalary] = useState<number>(1)
	const [bidsPension, setBidsPension] = useState<number>(1)
	const [allBid, setAllBid] = useState<number>(1)

	useQuery<IProductAdmin[]>({
		queryKey: ['getProduct'],
		queryFn: async () => {
			try {
				let { data } = await axios.get(
					'http://178.253.43.132:3000/product-data/getproduct'
				)
				data.forEach((value: IProductAdmin, index: number) => {
					if (index == 0) {
						setCreditNal({
							minLimit: value.minLimit,
							maxLimit: value.maxLimit,
							maxTime: value.maxTime,
							minTime: value.minTime,
						})
					}
					if (index == 1) {
						setMortgage({
							minLimit: value.minLimit,
							maxLimit: value.maxLimit,
							maxTime: value.maxTime,
							minTime: value.minTime,
						})
					}
					if (index == 2) {
						setAutoCredit({
							minLimit: value.minLimit,
							maxLimit: value.maxLimit,
							maxTime: value.maxTime,
							minTime: value.minTime,
						})
					}
				})
				return data
			} catch (error) {
				return
			}
		},
	})

	useQuery<IGetBidAdmin[]>({
		queryKey: ['getBid'],
		queryFn: async () => {
			try {
				let { data } = await axios.get(
					'http://178.253.43.132:3000/product-data/getbids'
				)
				data.forEach((value: IGetBidAdmin, index: number) => {
					if (index == 0) {
						setBidsFinance(value.bid)
					}
					if (index == 1) {
						setBidsSalary(value.bid)
					}
					if (index == 2) {
						setBidsPension(value.bid)
					}
					if (index == 3) {
						setAllBid(value.bid)
					}
				})
				return data
			} catch (err) {
				return
			}
		},
	})

	const saveData = async () => {
		await axios.post('http://178.253.43.132:3000/product-data/updatedata', {
			biddata: [
				{ name: 'finance', bid: bidsFinance },
				{ name: 'pension', bid: bidsPension },
				{ name: 'salary', bid: bidsSalary },
				{ name: 'allbid', bid: allBid },
			],
			productdata: [
				{
					name: 'mortgage',
					minLimit: mortgage.minLimit,
					maxLimit: mortgage.maxLimit,
					minTime: mortgage.minTime,
					maxTime: mortgage.maxTime,
				},
				{
					name: 'autocredit',
					minLimit: autocredit.minLimit,
					maxLimit: autocredit.maxLimit,
					minTime: autocredit.minTime,
					maxTime: autocredit.maxTime,
				},
				{
					name: 'creditnal',
					minLimit: creditNal.minLimit,
					maxLimit: creditNal.maxLimit,
					minTime: creditNal.minTime,
					maxTime: creditNal.maxTime,
				},
			],
		})
	}

	const { data } = useQuery<IUser[]>({
		queryKey: ['getUser'],
		queryFn: async () => {
			try {
				const { data } = await axios.get(
					'http://178.253.43.132:3000/auth/getUsers'
				)
				return data
			} catch (error) {}
		},
	})

	const saveUser = async (login: string) => {
		await axios.post(`http://178.253.43.132:3000/auth/updAdmin/${login}`, {
			check,
		})
		return window.location.href = '/adminPanel'
	}

	const delUser = async (login: string) => {
		await axios.post(`http://178.253.43.132:3000/auth/delUser/${login}`)
		return window.location.href = '/adminPanel'
	}

	return (
		<section className={style.adminlog}>
			<nav className={style.btnTable}>
				<h2
					className={active == 1 ? style.active : ''}
					onClick={() => setActive(1)}
				>
					Калькулятор
				</h2>
				<h2
					className={active == 2 ? style.active : ''}
					onClick={() => setActive(2)}
				>
					Пользователи
				</h2>
			</nav>
			{active == 1 && (
				<div className={style.calculateLog}>
					<div className={style.calculateData}>
						<h2>Кредит наличными</h2>
						<h3>Минимальный лимит:</h3>
						<input
							type='number'
							min={0}
							max={1000000}
							step={1000}
							value={creditNal.minLimit}
							onChange={e =>
								setCreditNal({
									minLimit: parseInt(e.target.value),
									maxLimit: creditNal.maxLimit,
									maxTime: creditNal.maxTime,
									minTime: creditNal.minTime,
								})
							}
						/>
						<h3>Максимальный лимит:</h3>
						<input
							type='number'
							value={creditNal.maxLimit}
							onChange={e =>
								setCreditNal({
									minLimit: creditNal.minLimit,
									maxLimit: parseInt(e.target.value),
									maxTime: creditNal.maxTime,
									minTime: creditNal.minTime,
								})
							}
						/>
						<h3>Минимальный срок (в мес.)</h3>
						<input
							type='number'
							value={creditNal.minTime}
							onChange={e =>
								setCreditNal({
									minLimit: creditNal.minLimit,
									maxLimit: creditNal.maxLimit,
									maxTime: creditNal.maxTime,
									minTime: parseInt(e.target.value),
								})
							}
						/>
						<h3>Максимальный срок (в мес.)</h3>
						<input
							type='number'
							value={creditNal.maxTime}
							onChange={e =>
								setCreditNal({
									minLimit: creditNal.minLimit,
									maxLimit: creditNal.maxLimit,
									maxTime: parseInt(e.target.value),
									minTime: creditNal.minTime,
								})
							}
						/>

						<h2>Автокредит</h2>
						<h3>Минимальный лимит:</h3>
						<input
							type='number'
							value={autocredit?.minLimit.toString()}
							onChange={e => {
								setAutoCredit({
									minLimit: parseInt(e.target.value),
									maxLimit: autocredit.maxLimit,
									maxTime: autocredit.maxTime,
									minTime: autocredit.minTime,
								})
							}}
						/>
						<h3>Максимальный лимит:</h3>
						<input
							type='number'
							value={autocredit?.maxLimit.toString()}
							onChange={e =>
								setAutoCredit({
									minLimit: autocredit.minLimit,
									maxLimit: parseInt(e.target.value),
									maxTime: autocredit.maxTime,
									minTime: autocredit.minTime,
								})
							}
						/>
						<h3>Минимальный срок (в мес.)</h3>
						<input
							type='number'
							value={autocredit?.minTime.toString()}
							onChange={e =>
								setAutoCredit({
									minLimit: autocredit.minLimit,
									maxLimit: autocredit.maxLimit,
									maxTime: autocredit.maxTime,
									minTime: parseInt(e.target.value),
								})
							}
						/>
						<h3>Максимальный срок (в мес.)</h3>
						<input
							type='number'
							value={autocredit?.maxTime.toString()}
							onChange={e =>
								setAutoCredit({
									minLimit: autocredit.minLimit,
									maxLimit: autocredit.maxLimit,
									maxTime: parseInt(e.target.value),
									minTime: autocredit.minTime,
								})
							}
						/>

						<h2>Ипотека</h2>
						<h3>Минимальный лимит:</h3>
						<input
							type='number'
							value={mortgage?.minLimit.toString()}
							onChange={e =>
								setMortgage({
									minLimit: parseInt(e.target.value),
									maxLimit: mortgage.maxLimit,
									maxTime: mortgage.maxTime,
									minTime: mortgage.minTime,
								})
							}
						/>
						<h3>Максимальный лимит:</h3>
						<input
							type='number'
							value={mortgage?.maxLimit.toString()}
							onChange={e =>
								setMortgage({
									minLimit: mortgage.minLimit,
									maxLimit: parseInt(e.target.value),
									maxTime: mortgage.maxTime,
									minTime: mortgage.minTime,
								})
							}
						/>
						<h3>Минимальный срок (в мес.)</h3>
						<input
							type='number'
							value={mortgage?.minTime.toString()}
							onChange={e =>
								setMortgage({
									minLimit: mortgage.minLimit,
									maxLimit: mortgage.maxLimit,
									maxTime: mortgage.maxTime,
									minTime: parseInt(e.target.value),
								})
							}
						/>
						<h3>Максимальный срок (в мес.)</h3>
						<input
							type='number'
							value={mortgage?.maxTime.toString()}
							onChange={e =>
								setMortgage({
									minLimit: mortgage.minLimit,
									maxLimit: mortgage.maxLimit,
									maxTime: parseInt(e.target.value),
									minTime: mortgage.minTime,
								})
							}
						/>

						<h2>Ставка "%"</h2>
						<div className={style.bid}>
							<h3>Общая ставка</h3>
							<input
								type='number'
								min={1}
								step={1}
								max={100}
								value={allBid}
								onChange={e => setAllBid(parseFloat(e.target.value))}
							/>
						</div>
						<div className={style.bid}>
							<h3>Фин. защита</h3>
							<input
								type='number'
								min={1}
								step={0.1}
								max={5}
								value={bidsFinance}
								onChange={e => setBidsFinance(parseFloat(e.target.value))}
							/>
						</div>
						<div className={style.bid}>
							<h3>Зарплат. клиент</h3>
							<input
								type='number'
								min={1}
								step={0.1}
								max={5}
								value={bidsSalary}
								onChange={e => setBidsSalary(parseFloat(e.target.value))}
							/>
						</div>
						<div className={style.bid}>
							<h3>Пенсион. клиент</h3>
							<input
								type='number'
								min={1}
								step={0.1}
								max={5}
								value={bidsPension}
								onChange={e => setBidsPension(parseFloat(e.target.value))}
							/>
						</div>
					</div>
					<button className={style.save} onClick={() => saveData()}>
						Сохранить
					</button>
				</div>
			)}
			{active == 2 && (
				<div className={style.userLog}>
					<table className={style.usertable}>
						<thead>
							<tr>
								<td>Фамилия</td>
								<td>Имя</td>
								<td>Отчество</td>
								<td>Дата регистрации</td>
								<td>Администратор</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{data &&
								data.map((value, index) => (
									<tr key={index}>
										<td>{value.surname}</td>
										<td>{value.name}</td>
										<td>{value.lastname}</td>
										<td>{value.createAt.slice(0, 10)}</td>
										<td>
											{value.role == 'admin' ? (
												<input
													type='checkbox'
													defaultChecked
													onClick={e => setCheck(e.currentTarget.checked)}
												/>
											) : (
												<input
													type='checkbox'
													onClick={e => setCheck(e.currentTarget.checked)}
												/>
											)}
										</td>
										<td><span onClick={() => saveUser(value.login)}>Сохранить</span> / <span onClick={() => delUser(value.login)}>Удалить</span></td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			)}
		</section>
	)
}

export default AdminLog
