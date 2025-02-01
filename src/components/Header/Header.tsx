import { useEffect, useState } from 'react'
import style from './header.module.scss'
import user from '../../images/icons/user.png'
import logout from '../../images/icons/logout.png'
import logo from '../../images/img/logotype.png'

const Header = () => {

	const [ active, setActive ] = useState<Boolean>(false)
	const [ login, setLogin ] = useState<string | undefined>('')

	useEffect(() => {
		if (!localStorage.getItem('user')) return 
		const login: string | undefined = localStorage.getItem('user')?.split('+')[0]
		setLogin(login)
		setActive(true)
	}, [])

	const userIsNotActive = () => {
		localStorage.removeItem('user')
		window.location.href = '/'
	}

	return (
		<header className={style.header}>
			<section className={style.airBlock}>
				<img src={logo} alt="logo" className={style.logo} onClick={() => window.location.href = '/'} style={{cursor: 'pointer'}}/>
				<h2 style={{cursor: 'pointer'}} onClick={() => window.location.href = '/'}>База Знаний</h2>
			</section>
			<section className={style.userData}>
				<nav className={style.nav}>
					<a href="/">Избранное</a>
					<a href="/">Калькулятор</a>
				</nav>
				<div className={style.userProfile}>
				 {
				 !active ? 
				 	<h2 className={style.authH2}>
						<a href="/auth" className={style.auth}>Вход</a> /
						<a href="/reg" className={style.auth}>Регистрация</a>
					</h2>
				 : 
				 <div className={style.user}>
					<div className={style.userProfileData}>
						<h3 className={style.userName} onClick={() => window.location.pathname = '/account'}>{login}</h3>
						<h4 className={style.privateRoomText} onClick={() => window.location.pathname = '/account'}>Личный кабинет</h4>
					</div>
					<img src={user} alt="user" className={style.userIcon} onClick={() => window.location.pathname = '/account'} />
					<img src={logout} alt="leave" className={style.logout} onClick={userIsNotActive}/>
				 </div>
				 }
				</div>
			</section>
		</header>
	)
}

export default Header