import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IGetProduct, IProduct } from '../../interface/product.interface'
import autocredit from '../../images/img/product/autocredit.png'
import creditcard from '../../images/img/product/creditcard.png'
import financeprotect from '../../images/img/product/financeprotect.png'
import kidscard from '../../images/img/product/kidscard.png'
import mortgages from '../../images/img/product/mortgage.png'
import piggybank from '../../images/img/product/piggybank.png'
import creditnal from '../../images/img/product/creditnal.png'
import style from './product.module.scss'
import CreditNalContent from './ProductContent/CreditNalContent/CreditNalContent'
import AutoCreditContent from './ProductContent/AutoCreditContent/AutoCreditContent'
import KidsCard from './ProductContent/KidsCard/KidsCard'
import CreditCard from './ProductContent/CreditCard/CreditCard'
import PiggyBank from './ProductContent/PiggyBank/PiggyBank'
import Mortgage from './ProductContent/Mortgage/Mortgage'
import FinanceProtect from './ProductContent/FinanceProtect/FinanceProtect'
import star from '../../images/icons/star.png'
import starActive from '../../images/icons/starActive.png'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const ProductInfo = ({ productName }: IProduct) => {
	const { favorite } = useTypedSelector(state => state)
	const {addToBasket, deleteToBasket} = useActions()	
	const [active, setActive] = useState<boolean>(false)
	const locale = window.location.pathname.slice(1)
	const { data } = useQuery<IGetProduct>({
		queryKey: ['getContent', productName],
		queryFn: async () => {
			const { data } = await axios.get(
				`http://178.253.43.132:3000/content/${productName}`
			)
			return data
		},
	})

	useEffect(() => {
		favorite.products.forEach((value) => {
			if (value.name == productName) {
				setActive(true)
			}
		})
	}, [])

	const saveProduct = () => {
		addToBasket({name: productName, path: locale})
		setActive(true)
	}

	const delProduct = () => {
		deleteToBasket(productName)
		setActive(false)
	}

	return (
		<section className={style.productInfo}>
			<h1 className={style.title}>{data?.name} 
				{!active ? <img src={star} className={style.star} alt="" onClick={saveProduct} /> : <img src={starActive} className={style.star} alt="" onClick={delProduct}/>}
			</h1>
			{data?.definition ? (
				<h2 className={style.subTitle}>
					<span>{data?.name}</span>
					{data?.definition}
				</h2>
			) : (
				''
			)}
			<div className={style.premium}>
				<img src={locale == 'autoCredit' ? autocredit : locale == 'creditCard' ? creditcard : locale == 'kidsCard' ? kidscard : locale == "mortgage" ? mortgages : locale == 'piggyBank' ? piggybank : locale == 'financeProtect' ? financeprotect : locale == 'creditNal' ? creditnal : ''} alt='...' />
				<ul className={style.nav}>
					{data?.premium1 ? <li>{data?.premium1}</li> : ''}
					{data?.premium2 ? <li>{data?.premium2}</li> : ''}
					{data?.premium3 ? <li>{data?.premium3}</li> : ''}
					{data?.premium4 ? <li>{data?.premium4}</li> : ''}
					{data?.premium5 ? <li>{data?.premium5}</li> : ''}
				</ul>
			</div>
			<div className={style.content}>
				{locale == 'creditNal' ? <CreditNalContent /> : locale == 'autoCredit' ? <AutoCreditContent /> : locale == 'kidsCard' ? <KidsCard /> : locale == 'creditCard' ? <CreditCard /> : locale == 'piggyBank' ? <PiggyBank /> : locale == 'mortgage' ? <Mortgage /> : locale == 'financeProtect' ? <FinanceProtect /> : ''}
			</div>
		</section>
	)
}

export default ProductInfo
