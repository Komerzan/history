import React, { FC } from 'react'
import SwiperComponent from './SwiperComponents/SwiperComponent'
import YearSpinner from './YearSpinner/YearSpinner'
import './TimeLine.scss'
import SpinnerButtons from './YearSpinner/SpinnerButtons/SpinnerButtons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import {
	changeActiveCategory,
	changeActivePoint,
} from '../../store/HistoricalSlice'
import { Category } from '../../interfaces'

const TimeLine: FC = () => {
	const pagination = [1, 2, 3, 4, 5, 6]
	const activePoint = useSelector(
		(state: RootState) => state.history.activePoint
	)
		const dispatch = useDispatch()
	const historyCategories : Category[] = [
		'Наука',
		'Спорт',
		'Политика',
		'Технологии',
		'Искусство',
		'Экономика',
	]


	return (
		<div className='timeline_wrapper'>
			<span className='title'>Исторические даты</span>
			<YearSpinner />
			<SwiperComponent />
			<div className='control'>
				<SpinnerButtons />
				<div className='pagination'>
					{pagination.map(index => (
						<div
							onClick={() => {
								dispatch(changeActiveCategory(historyCategories[index]))
								dispatch(changeActivePoint(index))
							}}
							className={
								activePoint + 1 == index
									? 'pagination_dot active'
									: 'pagination_dot'
							}
							key={index}
						></div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TimeLine
