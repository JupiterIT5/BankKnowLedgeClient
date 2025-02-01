import { useState } from 'react'
import style from './adminlog.module.scss'
import { IUser } from '../../interface/user.interface'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const AdminLog = () => {
	const [active, setActive] = useState<Number>(1)	
	const [check, setCheck] = useState<boolean>(false)	

	const { data } = useQuery<IUser[]>({
		queryKey: ['getUser'],
		queryFn: async () => {
			try {
				const { data } = await axios.get(
					'http://localhost:3000/auth/getUsers'
				)
				return data
			} catch (error) {
				window.location.href = '/'
			}
		},
	})

	const saveUser = async (login: string) => {
		await axios.post(`http://localhost:3000/auth/updAdmin/${login}`, {check})
	}

	return (
		<section className={style.adminlog}>
			<nav className={style.btnTable}>
				<h2 className={active == 1 ? style.active : ''} onClick={() => setActive(1)}>Статьи</h2>
				<h2 className={active == 2 ? style.active : ''} onClick={() => setActive(2)}>Пользователи</h2>
			</nav>
			{active == 1 &&
				<div className={style.contentLog}>

				</div>
			}
			{active == 2 && 
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
							{/* <tr>
								<td>Архипов</td>
								<td>Евгений</td>
								<td>Владимирович</td>
								<td>2024-01-23</td>
								<td>Администратор</td>
								<td><a href="#">Изменить</a></td>
							</tr> */}
							{data && data.map((value, index) => (
								<tr key={index}>
									<td>{value.surname}</td>
									<td>{value.name}</td>
									<td>{value.lastname}</td>
									<td>{value.createAt.slice(0, 10)}</td>
									<td>{value.role == 'admin' ? <input type="checkbox" defaultChecked onClick={(e) => setCheck(e.currentTarget.checked)}/> : <input type="checkbox" onClick={(e) => setCheck(e.currentTarget.checked)}/>}</td>
									<td onClick={() => saveUser(value.login)}>Сохранить</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			}
		</section>
	)
}

export default AdminLog