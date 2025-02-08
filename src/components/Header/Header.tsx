import { useEffect, useState } from 'react'
import style from './header.module.scss'
import user from '../../images/icons/user.png'
import logout from '../../images/icons/logout.png'
import logo from '../../images/img/logotype.png'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IProduct1 } from '../../interface/product.interface'
import favoriteIcon from '../../images/icons/favorite.png'

const Header = () => {

	const { favorite } = useTypedSelector(state => state)
	const [active, setActive] = useState<Boolean>(false)
	const [login, setLogin] = useState<string | undefined>('')
	const [product, setProduct] = useState<Array<IProduct1>>([])
	const [activeFavorite, setActiveFavorite] = useState<boolean>(false)

	useEffect(() => {
		const login: string | undefined = localStorage
			.getItem('user')
			?.split('+')[0]
		setLogin(login)
		setActive(true)
		setProduct(favorite.products)
		console.log(favorite)
	}, [favorite])

	const userIsNotActive = () => {
		localStorage.removeItem('user')
		window.location.href = '/'
	}

	return (
		<header className={style.header}>
			<section className={style.airBlock}>
				<img
					src={logo}
					alt='logo'
					className={style.logo}
					onClick={() => (window.location.href = '/')}
					style={{ cursor: 'pointer' }}
				/>
				<h2
					style={{ cursor: 'pointer' }}
					onClick={() => (window.location.href = '/')}
				>
					База Знаний
				</h2>
			</section>
			<section className={style.userData}>
				<nav className={style.nav}>
					<a onClick={() => setActiveFavorite(!activeFavorite)} style={{cursor: 'pointer'}}>Избранное</a>
					<a href='/calculate' style={{cursor: 'pointer'}}>Калькулятор</a>
				</nav>
				<div className={style.userProfile}>
					{!active ? (
						<h2 className={style.authH2}>
							<a href='/auth' className={style.auth}>
								Вход
							</a>{' '}
							/
							<a href='/reg' className={style.auth}>
								Регистрация
							</a>
						</h2>
					) : (
						<div className={style.user}>
							<div className={style.userProfileData}>
								<h3
									className={style.userName}
									onClick={() => (window.location.pathname = '/account')}
								>
									{login}
								</h3>
								<h4
									className={style.privateRoomText}
									onClick={() => (window.location.pathname = '/account')}
								>
									Личный кабинет
								</h4>
							</div>
							<img
								src={user}
								alt='user'
								className={style.userIcon}
								onClick={() => (window.location.pathname = '/account')}
							/>
							<img
								src={logout}
								alt='leave'
								className={style.logout}
								onClick={userIsNotActive}
							/>
						</div>
					)}
				</div>
			</section>
			<div className={activeFavorite ? [style.popup, style.popupActive].join(' ') : style.popup}>
				<div className={style.popupContainer}>
					{product.length > 0 ? 
					product.map((value, index) => {
						console.log(value)
						return <a key={index} onClick={() => window.location.href = `/${value.path}`}><img src={favoriteIcon} alt="" />{value.name}</a>
					})
					:
					<h2>В избранном нет продукт...</h2>
					}
				</div>
			</div>
		</header>
	)
}

export default Header
