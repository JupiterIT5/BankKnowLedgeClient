import { IGetProduct, IProduct } from '../../interface/product.interface'
import style from './product.module.scss'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

const ProductInfo = ({productName}: IProduct) => {

	const {data} = useQuery<IGetProduct>({
		queryKey: ['getContent', productName],
		queryFn: async () => {
			const { data } = await axios.get(`http://localhost:3000/content/${productName}`);
			if (!data) return data
			return data
		},
	})

	return (
		<section className={style.productInfo}>
			<h1 className={style.title}>{data?.name}</h1>
			{
			data?.definition 
			? 
				<h2 className={style.subTitle}>
					<span>{data?.name}</span>{data?.definition}
				</h2> 
			: 
				''}
			<div className={style.premium}>
				<img src={data?.img} alt='...' />
				<ul className={style.nav}>
					{data?.premium1 ? <li>{data?.premium1}</li> : ''}
					{data?.premium2 ? <li>{data?.premium2}</li> : ''}
					{data?.premium3 ? <li>{data?.premium3}</li> : ''}
					{data?.premium4 ? <li>{data?.premium4}</li> : ''}
					{data?.premium5 ? <li>{data?.premium5}</li> : ''}
				</ul>
			</div>
			<div className={style.content}></div>
		</section>
	)
}

export default ProductInfo
