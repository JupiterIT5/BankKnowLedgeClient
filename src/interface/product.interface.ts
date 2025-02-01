export interface IProduct {
	productName: string
}

export interface IGetProduct {
	name: string
	definition: string
	premium1: string
	premium2: string
	premium3: string
	premium4?: string
	premium5?: string
	img: string
}