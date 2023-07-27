import axios from 'axios';
import './AddMovie.css'
import { useForm } from 'react-hook-form';
function AddMovie() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(e) {
        axios.post('http://localhost:5000/add-movie', {
            name: e.name,
            genre: e.genre,
            rate: e.rate / 10,
            liked: e.liked
        })
        .then(({data}) => console.log(data))
        .catch(err => console.log(err))
    }
    return (
        <>
            <div id="add-movie-container">
                <form id='add-form' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'{
                        ...register('name')
                    } />
                    <label htmlFor="category">Genre</label>
                    <input type="text" name='category'{
                        ...register('genre')
                    } />
                    <label htmlFor="range">Rating</label>
                    <input type="range" name='range'{
                        ...register('rate')
                    } />
                    <label htmlFor="liked">Liked</label>
                    <input type="checkbox" name='liked'{
                        ...register('liked')
                    } />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}
export default AddMovie;