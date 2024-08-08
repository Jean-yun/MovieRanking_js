import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../styles/Detail.module.css';

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	
	const getMovie = async () => {
		const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
		const json = await response.json();
		setMovie(json.data.movie);
		setLoading(false)
	}
	
	useEffect(() => {
		getMovie();
	}, [id]);
	
	
	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (!movie) {
		return <h1>No movie Found</h1>
	}
	//The result page
	return (
		<div className={styles.container} style={{ backgroundImage: `url(${movie.background_image})`}}>
			<h1>{movie.title}</h1>
			<h3>{movie.year}</h3>
			<h3>{movie.genres.join(' ')}</h3>
			<img src={movie.large_cover_image} alt={movie.title}></img>
			<h4>Running Time : 🕠 {movie.runtime} min </h4>
			<p>Movie Reviews : {movie.rating} / 10 </p>
			
			
			
		</div>
	)
}

export default Detail;