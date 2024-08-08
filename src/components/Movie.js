//Created Movie Component

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';



function Movie({ id, url, coverImg, title, summary, rating, genres }) {
	return (
	<div>
		{/* all the img elements should have alt component */}
		<img src={coverImg} alt={title}></img>
			<h2><Link to={`/movie/${id}`}> {title} </Link> </h2>
		<p>Ratings : {rating} <br></br> {summary}</p>
		<ul>
			{genres.map(g => <li key={g}>{g}</li>)}
		</ul>
		</div>
	)
};

//Data Types
Movie.propTypes = {
	id: propTypes.number.isRequired,
	url: propTypes.string.isRequired,
	coverImg: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	rating: propTypes.number.isRequired,
	genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;