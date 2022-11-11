import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthorItem = ({ author, handleAuthorDelete }) => {
	return (
		<Fragment>
			<div className='author_route_container'>
				<div className='author_route_list'>
					<h3>{author}</h3>
					<button
						onClick={() => handleAuthorDelete(author)}
						className='author_delete'>
						<FontAwesomeIcon icon='trash-alt' />
					</button>
				</div>
			</div>
		</Fragment>
	)
}

export default AuthorItem
