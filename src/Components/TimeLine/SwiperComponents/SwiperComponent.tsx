import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import './SwiperStyles.scss'
import SlideContent from './SlideContent'
import arrow from '../../../assets/icons/next_arrow_sm.png'
import { useSelector } from 'react-redux'
import { IEvent } from '../../../interfaces'


const SwiperComponent: FC = () => {
	const activeCategory = useSelector(
		(state: any) => state.history.activeCategory
	)
	const history = useSelector((state: any) => state.history[activeCategory])

	return (
		<Swiper
			className='swiper'
			modules={[Navigation, Pagination]} // Use necessary modules
			breakpoints={{
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
				},

				380: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				668: {
					slidesPerView: 3,
					spaceBetween: 20,
				},

				924: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
			}}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
		>
			{history.map((point: IEvent) => (
				<SwiperSlide key={point.year}>
					<SlideContent
						year={point.year.toString()}
						description={point.description}
					/>
				</SwiperSlide>
			))}
			<div className='swiper-button-next'>
				<img src={arrow} alt='' />
			</div>
			<div className='swiper-button-prev'>
				<img src={arrow} alt='' />
			</div>
		</Swiper>
	)
}

export default SwiperComponent
