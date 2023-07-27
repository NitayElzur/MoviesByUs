import { useState } from 'react'
import './MovieItem.css'
import axios from 'axios';
function MovieItem({ value, index, deleteItem }) {
    const [liked, setLiked] = useState(value.liked);
    function likePressed() {
        setLiked(!liked)
        axios.patch('http://localhost:5000/update-like', {
            id: value.id,
            value: !liked
        })
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }
    function deleteMe(value) {
        axios.delete('http://localhost:5000/delete-movie', {
            data: {
                id: value.id
            }
        })
        .then(({data}) => deleteItem(index))
        .catch(err => console.log(err))
    }
    return (
        <>
            <div id='movie-item-main'>
                <div className='movie-item'>
                    {value.id}
                </div>
                <div className='movie-item'>
                    {value.name}
                </div>
                <div className='movie-item'>
                    {value.rate}
                </div>
                <div className='movie-item'>
                    {value.genre}
                </div>
                <div className='movie-item'>
                    <input type="checkbox" checked={liked} onChange={likePressed} />
                </div>
                <button className='movie-item' onClick={() => deleteMe(value)}>delete</button>
            </div>
        </>
    )
}
export default MovieItem