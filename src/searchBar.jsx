import React from 'react'
import  './searchBar.css'

function SearchBar() {
	const searchbar = (

		<div className='searchbar'>
			<div className="sorting">
				<button id="best-match">Best <br />Match</button>
				<button id="Highest Rated">Highest <br /> Rated</button>
				<button id="Most Reviewed">Most <br /> Reviewed</button>
			</div>
			<div className='searchbars'>
				<input type="text" name="what" id="what" placeholder='Search Business' />
				<input type="text" name="where" id="where" placeholder='where?' />
			</div>
			<button id='submitButton'>Let's Go</button>
		</div>
	)
	
	return searchbar
}

export default SearchBar