//Created Movie Component

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/Movie.module.css';


function Movie({ id, url, coverImg, title, year, summary, rating, genres }) {
	return (
	<div className={styles.movie}>
		{/* all the img elements should have alt component */}
			<img className={styles.movie__img} src={coverImg} alt={title}></img>
			<div>
				<h2 className={styles.movie__title}>
					<Link to={`/movie/${id}`}> {title} </Link>
				</h2>
				<h3 className={styles.movie__year}> {year} <br></br> ⭐️⭐️⭐️ {rating} </h3>
				<p> {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
				<ul className={styles.movie__genres}>
					{genres.map((g) => <li key={g}>{g}</li>)}
				</ul> 
			</div>
		</div>
	)
};

//Data Types
Movie.propTypes = {
	id: propTypes.number.isRequired,
	url: propTypes.string.isRequired,
	coverImg: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	year: propTypes.number.isRequired,
	summary: propTypes.string.isRequired,
	rating: propTypes.number.isRequired,
	genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;