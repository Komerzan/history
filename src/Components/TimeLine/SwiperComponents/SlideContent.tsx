import React, { FC } from 'react'
import { ISlideContent } from '../../../interfaces'

const SlideContent: FC<ISlideContent> = ({ year, description }) => {
	return (
		<div className='slider_content'>
			<p className='year'>{year}</p>
			<p className='description'>{description}</p>
		</div>
	)
}

export default SlideContent
