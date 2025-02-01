import AdminLog from '../components/AdminPanel/AdminLog'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const AdminPanel = () => {
	if (localStorage.getItem('user')?.split('+')[2] !== '9835As38D') return window.location.href = '/'

	return (
		<>
			<Header />
			<AdminLog />
			<Footer />
		</>
	)
}

export default AdminPanel