import React, { FC, useEffect, useState } from 'react'
import CircleTimeLine from './CircleTime/CircleTimeLine'
import './YearSpinner.scss'
import SpinnerButtons from './SpinnerButtons/SpinnerButtons'
import { RootState } from '../../../store/store'
import { useSelector } from 'react-redux'
import gsap from 'gsap'

const YearSpinner: FC = () => {
	const activeCategory = useSelector(
		(state: RootState) => state.history.activeCategory
	)

	useEffect(() => {
		gsap.fromTo('.category', { opacity: 0 }, { opacity: 1, duration: 1.5 })
	}, [activeCategory])

	return (
		<div className='year_wrapper'>
			<CircleTimeLine />
			<div className='category'>{activeCategory}</div>
			<div className='controls'>
				<SpinnerButtons />
			</div>
		</div>
	)
}

export default YearSpinner
