import React, { FC, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './AnimatedNumber.scss'
import { ICounter } from '../../../../../../interfaces'

const AnimatedNumber: FC<ICounter> = ({ year, color }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const animation = { value: 0 }
		gsap.to(animation, {
			value: year,
			duration: 0.7,
			onUpdate: () => {
				setCount(Math.floor(animation.value))
				gsap.set('.number', { opacity: 0 })
				gsap.to('.number', { opacity: 1, duration: 0.7 })
			},
			ease: 'power2.out',
			// Анимация opacity теперь в одном объекте
			opacity: 1,
			onComplete: () => {
				gsap.to('.number', { opacity: 1, duration: 1.5 }) // Плавное изменение прозрачности в 1
			},
		})
	}, [year])

	return (
		<div className='number' style={{ color: `${color}` }}>
			{count}
		</div>
	)
}

export default AnimatedNumber
