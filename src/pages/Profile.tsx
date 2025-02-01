import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProfileData from '../components/Profile/ProfileData'

const Profile = () => {
	if (localStorage.length == 0 || !localStorage.getItem('user')) return window.location.href = '/'

	return (
		<>
			<Header />
			<ProfileData />
			<Footer />
		</>
	)
}

export default Profile