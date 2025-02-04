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

export interface IProductAdmin {
	minLimit: number
	maxLimit: number
	minTime: number
	maxTime: number
}

export interface IBidAdmin {
	finance: number
	salary: number
	pension: number
}

export interface IGetBidAdmin {
	name: string
	bid: number
}