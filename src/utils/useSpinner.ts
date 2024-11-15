import { useDispatch, useSelector } from 'react-redux'
import { changeActiveCategory, changeActivePoint } from '../store/HistoricalSlice'
import { AppDispatch, RootState } from '../store/store'


export const useSpinnerHandlers = () => {
	const dispatch: AppDispatch = useDispatch()
	const activePoint = useSelector(
		(state: RootState) => state.history.activePoint
	)
	const historyLength = useSelector(
		(state: RootState) => Object.keys(state.history).length - 2
	)
	const historyCategories = [
		'Наука',
		'Спорт',
		'Политика',
		'Технологии',
		'Искусство',
		'Экономика',
	]

	const handlePrev = () => {
		const newPoint = (activePoint - 1 + historyLength) % historyLength
		dispatch(changeActivePoint(newPoint))
		dispatch(changeActiveCategory(historyCategories[newPoint]))
	}

	const handleNext = () => {
		const newPoint = (activePoint + 1) % historyLength
		dispatch(changeActivePoint(newPoint))
		dispatch(changeActiveCategory(historyCategories[newPoint]))
	}

	return { handlePrev, handleNext }
}
