import React from 'react'
import SpinnerButton from '../../../ui/SpinnerButtons'
import { useSpinnerHandlers } from '../../../../utils/useSpinner'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import './SpinnerButtons.scss'

const SpinnerButtons = () => {
	const { handlePrev, handleNext } = useSpinnerHandlers()
	const activePoint = useSelector(
		(state: RootState) => state.history.activePoint
	)
	const history = useSelector((state: RootState) => state.history)
	const historyLength = Object.keys(history).length - 2


	return (
		<div className='spinner_control'>
			<span className='active_slide'>
				{activePoint <= 9 && historyLength < 10 ? (
					`0${activePoint + 1}/0${historyLength}`
				) : (
					<></>
				)}
			</span>
			<div className='spinner_buttons'>
				<button
					disabled={activePoint == 0}
					className={activePoint == 0 ? 'btn disabled' : 'btn'}
				>
					<SpinnerButton changeCateg={handlePrev} revers={false} />
				</button>
				<button
					disabled={activePoint+1 == historyLength}
					className={activePoint+1 == historyLength ? 'btn disabled' : 'btn'}
				>
					<SpinnerButton changeCateg={handleNext} revers={true} />
				</button>
			</div>
		</div>
	)
}

export default SpinnerButtons
