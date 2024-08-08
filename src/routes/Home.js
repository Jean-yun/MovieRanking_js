import { useState, useEffect } from 'react';
import Movie from '../components/Movie';


function Home() {
	
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
      .then(response => response.json())
      .then((json) => setMovies(json.data.movies));
    setLoading(false);
  }, []);


  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <div>
          {movies.map(movie =>
            // must include key variable 
            <Movie
			  key={movie.id}
			  id={movie.id}
			  url={movie.url}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              rating={movie.rating}
              genres={movie.genres}
            />)}
        </div>
      }
    </div>
  )
}

export default Home;