import { useEffect, useState } from 'react';
import './Sidebar.css'
import axios from 'axios';
import GenreBar from './GenreBar/GenreBar';
function Sidebar() {
    const [genres, setGenres] = useState();
    useEffect(() => {
        axios.get('http://localhost:5000/sum-of-genres')
            .then(({ data }) => setGenres(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div id="sidebar-main">
                {genres &&
                    genres.map((value, index) => {
                        return (
                            <div key={index}>
                                <GenreBar value={value}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Sidebar;