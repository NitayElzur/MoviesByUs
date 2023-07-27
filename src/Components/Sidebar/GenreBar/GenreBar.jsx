import './GenreBar.css'
function GenreBar({ value }) {
    return (
        <>
            <div id="genrebar-main">
                <div className='genrebar-item'>
                    {value.genre}
                </div>
                <div className='genrebar-item'>
                    {value.amount}
                </div>
            </div>
        </>
    )
}
export default GenreBar;