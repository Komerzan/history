import React, { useState, useRef, useEffect, FC } from 'react'
import { gsap } from 'gsap'
import './CircleTime.scss'
import { useDispatch, useSelector } from 'react-redux'
import {  changeActivePoint } from '../../../../store/HistoricalSlice'
import YearPeriod from './YearPeriod/YearPeriod'
import CirclePoint from './CirclePoint'
import { RootState } from '../../../../store/store'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { Category } from '../../../../interfaces'
gsap.registerPlugin(CSSPlugin)

const RotatingCircle: FC = () => {
	const dispatch = useDispatch()
	const activePoint = useSelector(
		(state: RootState) => state.history.activePoint
	)
	const history = useSelector((state: RootState) => state.history)

	const [verticalText, setVerticalText] = useState(60)
	const [showCategory, setShowCategory] = useState(true)

	const circleRef = useRef<HTMLDivElement>(null)
	const points = [0, 1, 2, 3, 4, 5]
	const historyCategories: Category[] = [
		'Наука',
		'Спорт',
		'Политика',
		'Технологии',
		'Искусство',
		'Экономика',
	]
	const angleIncrement = 360 / historyCategories.length

	useEffect(() => {
		const updatedVerticalText = activePoint === 0 ? 60 : 60 * (activePoint + 1)
		setVerticalText(updatedVerticalText)

		if (showCategory) {
			gsap.fromTo(
				'.point_title',
				{ opacity: 0, scale: 0.8 },
				{ opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
			)
		}
	}, [activePoint, showCategory])

	const rotateCircle = (index: number) => {
		const rotationAngle = -index * angleIncrement
		gsap.context(() => {
			gsap.to('.circle', {
				rotation: `${rotationAngle}deg`,
				duration: 0.7,
				ease: 'power2.out',
			})
		}, circleRef)

		dispatch(changeActivePoint(index))
		gsap.delayedCall(0.4, () => {
			setShowCategory(true)
		})
	}

	const handleClick = (index: number) => {
		if (index !== activePoint) {
			setShowCategory(false)
			rotateCircle(index)
		}
	}

	useEffect(() => {
		setShowCategory(false)
		rotateCircle(activePoint)
	}, [activePoint])

	const renderPoints = () =>
		points.map(index => (
			<CirclePoint
				key={index}
				index={index}
				activePoint={activePoint}
				angleIncrement={angleIncrement}
				historyCategories={historyCategories}
				showCategory={showCategory}
				verticalText={verticalText}
				onClick={handleClick}
			/>
		))

	const getCategoryYear = (isLast: boolean): number => {
		const category = history[historyCategories[activePoint]]
		if (!category || category.length === 0) return 0
		return isLast ? category[category.length - 1].year : category[0].year
	}

	return (
		<div className='container'>
			<div className='circle_wrapper' ref={circleRef}>
				<YearPeriod
					startYear={getCategoryYear(false) ?? 0}
					endYear={getCategoryYear(true) ?? 0}
				/>
				<div className='circle_content'>
					<div className='circle'>{renderPoints()}</div>
				</div>
			</div>
		</div>
	)
}

export default RotatingCircle
