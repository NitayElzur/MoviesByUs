import { useEffect, useState } from 'react';
import './MainPage.css'
import axios from 'axios';
import MovieItem from './MovieItem/MovieItem';
function MainPage() {
    const [movies, setMovies] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(({ data }) => setMovies(data))
            .catch(err => console.log(err))
    }, [])
    function deleteItem(index) {
        setMovies(movies.filter((v,i) => index !== i))
    }
    return (
        <>
            {movies &&
                movies.map((value, index) => {
                    return (
                        <MovieItem key={index} value={value} index={index} deleteItem={deleteItem} />
                    )
                })
            }
        </>
    )
}
export default MainPage;