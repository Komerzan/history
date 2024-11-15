import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  changeActiveCategory } from '../../../../store/HistoricalSlice'
import { Category, ICirclePoint } from '../../../../interfaces'


const CirclePoint: FC<ICirclePoint> = ({
	index,
	activePoint,
	angleIncrement,
	historyCategories,
	showCategory,
	verticalText,
	onClick,
}) => {
	const radius = 265
	const angle = index * angleIncrement
	const x = radius * Math.cos((angle * Math.PI) / 180)
	const y = radius * Math.sin((angle * Math.PI) / 180)
	const dispatch = useDispatch()
	

	return (
		<div
			className={`point ${index === activePoint ? 'active' : ''}`}
			onClick={() => {
				onClick(index)
				dispatch(changeActiveCategory(historyCategories[index] as Category))
			}}
			style={{
				position: 'absolute',
				left: `calc(50% + ${x}px)`,
				top: `calc(50% + ${y}px)`,
				transform: `rotate(${verticalText}deg)`,
			}}
		>
			{index === activePoint && showCategory && (
				<p className='point_title'>{historyCategories[activePoint]}</p>
			)}
			{index + 1}
		</div>
	)
}

export default CirclePoint
