import AuthComponent from '../components/Auth/AuthComponent'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Reg = () => {

	if (localStorage.length !== 0 || localStorage.getItem('user')) return window.location.href = '/'

	return (
		<>
			<Header /> 
			<AuthComponent />
			<Footer />
		</>
	)
}

export default Reg