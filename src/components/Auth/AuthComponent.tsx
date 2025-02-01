import { useState } from 'react'
import style from './auth.module.scss'
import axios from 'axios'

const AuthComponent = () => {
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [lastname, setLastname] = useState<string>('')
	const [error, setError] = useState<string>('')

	const Auth = async () => {
		setError('')
		if (!login || !password) {
			setError('Заполните данные!')
			return
		}
		if (window.location.pathname == '/reg') {
			if (password.length < 3 || login.length < 3 || name.length < 3 || surname.length < 3, lastname.length <3 && name.length > 15 && surname.length > 15 && lastname.length > 15) {
				setError('Минимальное значение - 3, Максимальное - 15')
				return
			}

			await axios.post(`http://localhost:3000/auth/create`, {login, password, name, surname, lastname}).then(({data}) => {
				localStorage.setItem('user', `${data.login}+${data.password}`)
				window.location.href = '/'
			}).catch(() => setError('Аккаунт уже существует.'))
		}

		if (window.location.pathname == '/auth') {
			if (password.length < 3 || login.length < 3 || name.length < 3 || surname.length < 3, lastname.length <3 && name.length > 15 && surname.length > 15 && lastname.length > 15) {
				setError('Минимальное значение - 3, Максимальное - 15')
				return
			}

			await axios.post(`http://localhost:3000/auth/authUser`, {login, password}).then(({data}) => {
				if (!data.login || !data.password) {
					setError('Неверный логин или пароль.')
					return
				}
				localStorage.setItem('user', `${data.login}+${data.password}`)
				window.location.href = '/'
			}).catch(() => setError('Неверный логин или пароль.'))
		}
	}

	return (
		<section className={style.auth}>
			<div className={style.popup}>
				<div className={style.btnAuth}>
					{window.location.pathname !== '/reg' ? <a href='/reg' >Регистрация</a> : <h3 className={style.active}>Регистрация</h3>}
					{window.location.pathname !== '/auth' ? <a href='/auth' >Авторизация</a> : <h3 className={style.active}>Авторизация</h3>}
				</div>
				<div className={style.form}>
					{window.location.pathname == '/reg' &&<input type="text" placeholder='Имя' name='name' maxLength={20} onChange={(e) => setName(e.target.value)}/>}
					{window.location.pathname == '/reg' && <input type="text" placeholder='Фамилия' name='surname' maxLength={20} onChange={(e) => setSurname(e.target.value)}/>}
					{window.location.pathname == '/reg' && <input type="text" placeholder='Отчество' name='lastname' maxLength={20} onChange={(e) => setLastname(e.target.value)}/>}
					<input type="text" placeholder='Логин' name='login' maxLength={20} onChange={(e) => setLogin(e.target.value)}/>
					<input type="text" placeholder='Пароль' name='password' maxLength={20} onChange={(e) => setPassword(e.target.value)}/>
					{error && <h2 className={style.error}>{error}</h2>}
					<div className={style.formBtn}>
						<button className={style.successBtn} onClick={() => Auth()}>{window.location.pathname == '/auth' ? "Войти" : "Регистрация"}</button>
						{window.location.pathname == '/auth' && <button className={style.help}>Не помню пароль</button>}
					</div>
					<a href="/" className={style.helplink}>Помощь</a>
				</div>
			</div>
		</section>
	)
}

export default AuthComponent