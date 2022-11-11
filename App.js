import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faTrashAlt,
	faCheck,
	faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import Home from './components/Home'
import Authors from './components/Author/Authors'
import './styles/main.css'

library.add(faTrashAlt, faTwitter, faCheck, faSearch)

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					{/* Header */}
					<Link to='/' style={{ textDecoration: 'none' }}>
						<h1 className='header'>Library Books</h1>
					</Link>

					<ul className='links'>
						<Link to='/authors' style={{ textDecoration: 'none' }}>
							<li>Authors</li>
						</Link>
					</ul>

					<Route exact path='/' component={Home} />
					<Route path='/authors' component={Authors} />
				</Fragment>
			</Router>
		)
	}
}

export default App
