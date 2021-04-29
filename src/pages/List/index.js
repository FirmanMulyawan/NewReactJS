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
} from '../../assets'
import './list.css'

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
			<img src={like} alt='closeBtn'  className='closeBtn'/>
			<img src={point} alt='closeBtn'  className='closeBtn'/>
		</div>
	)
}

export default List
