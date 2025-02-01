import style from './profile.module.scss'
import user from '../../images/img/user.png'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IUser } from '../../interface/user.interface'
import { useState } from 'react'

const ProfileData = () => {
	const login = localStorage.getItem('user')?.split('+')[0]
	const [role, setRole] = useState<string>('')

	const { data } = useQuery<IUser>({
		queryKey: ['getUser'],
		queryFn: async () => {
			try {
				const { data } = await axios.get(
					'http://localhost:3000/auth/authUserLogin/' + login
				)
				if (!data) return window.location.href = '/'
				if (data?.role == 'admin') {
					setRole('Администратор')
					if (localStorage.getItem('user')?.split('+')[2] !=="9835As38D") {
						localStorage.setItem('user', localStorage.getItem('user')?.split('+')[0] + '+' + localStorage.getItem('user')?.split('+')[1] + '+9835As38D')
					}
				} else {
					setRole('Пользователь')
				}
				return data
			} catch (error) {
				window.location.href = '/'
			}
		},
	})

	const exitWithAccount = () => {
		localStorage.removeItem('user')
		window.location.href = '/'
	}

	return (
		<section className={style.profile}>
			<div className={style.data}>
				<img className={style.userIMG} src={user} alt='user' />
				<div className={style.userInfo}>
					<h2><span>ФИО:</span> {data?.surname} {data?.name} {data?.lastname}</h2>
					<h2><span>Дата регистрации:</span> {data?.createAt.slice(0, 10)}</h2>
					<h2><span>Роль:</span> {role}</h2>
					<div className={style.btnUser}>
						{data?.role == 'admin' && <button className={style.adminPanelBtn} onClick={() => window.location.href="/adminPanel"}>Админ панель</button>}
						<button className={style.exitBtn} onClick={() => exitWithAccount()}>Выйти</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProfileData
