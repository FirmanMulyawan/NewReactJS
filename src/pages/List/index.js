import React from 'react'
import {
	closeBtn,
	background,
	instagram,
	facebook,
	twitter,
	Polygon,
	chevrondown,
	dislike,
	like,
	point,
	newItem,
	bestSeller,
	hotItem,
	fullStar,
	halfStar,
} from '../../assets'
import './list.css'
import Rating from './Rating/'

const List = () => {
	return (
		<div className='container'>
			<img src={closeBtn} alt='closeBtn' className='closeBtn' />
			<img src={background} alt='closeBtn' className='closeBtn' />
			<img src={instagram} alt='closeBtn' className='closeBtn' />
			<img src={facebook} alt='closeBtn' className='closeBtn' />
			<img src={twitter} alt='closeBtn' className='closeBtn' />
			<img src={Polygon} alt='closeBtn' className='closeBtn' />
			<img src={chevrondown} alt='closeBtn' className='closeBtn' />
			<img src={dislike} alt='closeBtn' className='closeBtn' />
			<img src={like} alt='closeBtn' className='closeBtn' />
			<img src={point} alt='closeBtn' className='closeBtn' />
			<img src={newItem} alt='closeBtn' className='closeBtn' />
			<img src={bestSeller} alt='closeBtn' className='closeBtn' />
			<img src={hotItem} alt='closeBtn' className='closeBtn' />
			<img src={fullStar} alt='closeBtn' className='closeBtn' />
			<img src={halfStar} alt='closeBtn' className='closeBtn' />
			<div>
				<Rating value={2.5} />
			</div>
		</div>
	)
}

export default List
