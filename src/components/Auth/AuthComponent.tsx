import axios from 'axios'
import { useState } from 'react'
import style from './auth.module.scss'

const AuthComponent = () => {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [lastname, setLastname] = useState<string>('')
	const [error, setError] = useState<Array<string>>([])

	const Auth = async () => {
		if (!login || !password) {
			setError(['Заполните данные!'])
			return
		}
		if (window.location.pathname == '/reg') {
			let errorArray: Array<string> = []
			if (password.length < 6) {
				errorArray.push('Минимальная длина пароля - 6')
			}
			if (login.length < 3) {
				errorArray.push('Минимальная длина логина - 3')
			}
			if (name.length < 2) {
				errorArray.push('Минимальная длина имени - 2')
			}
			if (lastname.length < 3) {
				errorArray.push('Минимальная длина отчества - 3')
			}
			if (surname.length < 3) {
				errorArray.push('Минимальная длина фамилии - 3')
			}
			setError(errorArray)

			if (errorArray.length < 1) {
				await axios
				.post(`http://178.253.43.132:3000/auth/create`, {
					login,
					password,
					name,
					surname,
					lastname,
				})
				.then(({ data }) => {
					localStorage.setItem('user', `${data.login}+${data.password}`)
					window.location.href = '/'
				})
				.catch(() => setError(['Аккаунт уже существует.']))
			}
		}

		if (window.location.pathname == '/auth') {
			await axios
				.post(`http://178.253.43.132:3000/auth/authUser`, {
					login,
					password,
				})
				.then(({ data }) => {
					if (!data.login || !data.password) {
						setError(['Неверный логин или пароль.'])
						return
					}
					localStorage.setItem('user', `${data.login}+${data.password}`)
					window.location.href = '/'
				})
				.catch(() => setError(['Неверный логин или пароль.']))
		}
	}

	return (
		<section className={style.auth}>
			<div className={style.popup}>
				<div className={style.btnAuth}>
					{window.location.pathname !== '/reg' ? (
						<a href='/reg'>Регистрация</a>
					) : (
						<h3 className={style.active}>Регистрация</h3>
					)}
					{window.location.pathname !== '/auth' ? (
						<a href='/auth'>Авторизация</a>
					) : (
						<h3 className={style.active}>Авторизация</h3>
					)}
				</div>
				<div className={style.form}>
					{window.location.pathname == '/reg' && (
						<input
							type='text'
							placeholder='Имя'
							name='name'
							maxLength={15}
							onChange={e => setName(e.target.value)}
						/>
					)}
					{window.location.pathname == '/reg' && (
						<input
							type='text'
							placeholder='Фамилия'
							name='surname'
							maxLength={15}
							onChange={e => setSurname(e.target.value)}
						/>
					)}
					{window.location.pathname == '/reg' && (
						<input
							type='text'
							placeholder='Отчество'
							name='lastname'
							maxLength={15}
							onChange={e => setLastname(e.target.value)}
						/>
					)}
					<input
						type='text'
						placeholder='Логин'
						name='login'
						maxLength={15}
						onChange={e => setLogin(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Пароль'
						name='password'
						onChange={e => setPassword(e.target.value)}
					/>
					{error && error.map((value: string, index: number) => (
						<h2 className={style.error} key={index}>{value}</h2>
					))}
					<div className={style.formBtn}>
						<button className={style.successBtn} onClick={() => Auth()}>
							{window.location.pathname == '/auth' ? 'Войти' : 'Регистрация'}
						</button>
						{window.location.pathname == '/auth' && (
							<button className={style.help}>Не помню пароль</button>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AuthComponent
