import React, { FC } from 'react'
import AnimatedNumber from './AnimatedNumber/AnimatedNumber'
import { IYearPeriod } from '../../../../../interfaces'
import './YearPeriod.scss'

const YearPeriod: FC<IYearPeriod> = ({ startYear, endYear }) => (
	<div className='year_period'>
		<AnimatedNumber color='#5D5FEF' year={startYear} />
		<AnimatedNumber color='#EF5DA8' year={endYear} />
	</div>
)

export default YearPeriod
