import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

    //1. 데이터 담을공간
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)

    //3. 네트워킹
    const getData = async () => {
        return (
            await axios.get('https://api.themoviedb.org/3/movie/464052?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US')
                // .then(res => console.log(res.data))
                .then(res => {
                    setMovie(res.data)
                    setLoading(false)
                })
                    .catch(err => console.log(err))
        )
    }

    //2. 자동실행 함수

    useEffect(() => {
        getData()
    }, {})

    //4. 화면에 보여주는 부분
    return (
        <>
            {loading ?
                <div>
                    <h1>
                        Loading ...
                    </h1>
                </div>
            : (
                    <div>
                        <h1>Title : {movie.original_title}</h1>
                        <h2>Movie release date : {movie.release_date}</h2>
                        <h2>Movie revenue : {movie.revenue}$</h2>
                        <h3>Runningtime : {movie.runtime}min</h3>
                        {movie.genres.map(genres => (
                            <h4>MovieGenres : {genres.name}</h4>
                        ))}


                    </div>

                )
            }
        </>

    );
};

export default App;
