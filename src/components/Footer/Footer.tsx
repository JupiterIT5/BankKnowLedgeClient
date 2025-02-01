import style from './footer.module.scss'
import apple from '../../images/icons/apple.png'
import googlePlay from '../../images/icons/googleplay.png'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.mobAppContaner}>
				<h2>Загрузите мобильное приложение База Знаний:</h2>
				<div className={style.mobApp}>
					<a href="/">
						<button>
							<img src={apple} alt="..." />
							<h6>App Store</h6>
						</button>
					</a>
					<a href="/">
						<button>
							<img src={googlePlay} alt="..." />
							<h6>Google Play</h6>
						</button>
					</a>
				</div>
			</div>
			<span />
			<div className={style.recomendation}>
				<h4>Полезное:</h4>
				<a href="/" className={style.bank}>Сайт Банка</a>
				<a href="/" className={style.adress}>Адреса на карте</a>
			</div>
		</footer>
	)
}

export default Footer