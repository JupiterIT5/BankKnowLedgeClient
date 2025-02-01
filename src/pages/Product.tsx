import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProductInfo from '../components/Product/ProductInfo'
import array from '../images/icons/array.png'
import { IProduct } from '../interface/product.interface'
import './nav.scss'

const Product = ({productName}: IProduct) => {

	return (
		<>
			<Header />
			<div className='nav'>
				<a href="/">Главная</a>
				<img src={array} alt="..." />
				<h4>{productName}</h4>
			</div>
			<ProductInfo productName={productName} />
			<Footer />
		</>
	)
}

export default Product