import React, { Fragment } from 'react'
import '../styles/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ book, handleBookDelete }) => {
	const { title, genre, year, author, id, count } = book

	return (
		<Fragment>
			<div className='card'>
				<h3 className='card_title'>{title}</h3>
				<div className='card_details'>
					<p className='card_summary'>Genre: {genre}</p>
					<p className='card_summary'>Count: {count}</p>
				</div>
				<p className='card_isbn'>
					Year: <span>{year}</span>
				</p>
				<ul className='card_author_list'>
					<li className='card_author_name'>{author}</li>
				</ul>
				<button className='card_delete' onClick={() => handleBookDelete(id)}>
					<FontAwesomeIcon icon='trash-alt' />
				</button>
			</div>
		</Fragment>
	)
}

export default Card
