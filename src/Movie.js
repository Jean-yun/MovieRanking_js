//Created Movie Component

import propTypes from 'prop-types';

function Movie({ coverImg, title, summary, rating, genres }) {
	return (
	<div>
		<img src={coverImg} alt={title}></img>
		<h2>{title}</h2>
		<p>Ratings : {rating} <br></br> {summary}</p>
		<ul>
			{genres.map(g => <li key={g}>{g}</li>)}
		</ul>
		</div>
	)
};

//Data Types
Movie.propTypes = {
	coverImg: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	summary: propTypes.string.isRequired,
	rating: propTypes.number.isRequired,
	genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;