import React, { FC } from 'react'
import './UI.scss'
import firstImg from '../../assets/icons/next.png'
import secondImg from '../../assets/icons/arrow-mb.png'
import { ISpinnerButton } from '../../interfaces'

const SpinnerButton: FC<ISpinnerButton> = ({ revers, changeCateg }) => {
	return (
		<div className='spinner' onClick={() => changeCateg()}>
			<img
				className='firstImg'
				style={{ transform: revers ? 'rotate(180deg)' : 'none' }}
				src={firstImg}
				alt='spinner'
			/>
			<img
				className='secondImg'
				style={{ transform: revers ? 'rotate(180deg)' : 'none' }}
				src={secondImg}
				alt='spinner'
			/>
		</div>
	)
}

export default SpinnerButton
