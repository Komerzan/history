export interface ISlideContent {
	year: string
	description: string
}

export interface ICounter {
	year: number
	color: string
}

export interface ICirclePoint {
	index: number
	activePoint: number
	angleIncrement: number
	historyCategories: Category[]
	onClick: (index: number) => void
	showCategory: boolean
	verticalText: number
}


export interface IYearPeriod {
	startYear: number
	endYear: number
}

export interface ISpinnerButton {
	revers: boolean
	changeCateg: () => void
	
}

export interface IEvent {
	year: number
	description: string
}

export type Category =
	| 'Наука'
	| 'Спорт'
	| 'Политика'
	| 'Технологии'
	| 'Искусство'
	| 'Экономика'

