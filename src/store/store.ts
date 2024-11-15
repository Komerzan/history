// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import HistoricalSlice from './HistoricalSlice'

const store = configureStore({
	reducer: {
		history: HistoricalSlice,
	},
})

export default store

// Типизируем Store
export type AppDispatch = typeof store.dispatch // Тип для dispatch
export type RootState = ReturnType<typeof store.getState> // Тип для состояния

