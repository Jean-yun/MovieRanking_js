import { useState, useEffect } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
      .then(response => response.json())
      .then((json) => setMovies(json.data.movies));
    setLoading(false);
  }, []);
  
  console.log(movies)

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <div>
          {movies.map(movie =>
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2>{movie.title}</h2>
              <p>Ratings : {movie.rating} <br></br> {movie.summary}</p>
              <ul>
                {movie.genres.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>)}
        </div>
      }
    </div>
    

)

}

export default App;
