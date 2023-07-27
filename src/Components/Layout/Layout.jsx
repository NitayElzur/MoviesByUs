import './Layout.css';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
function Layout() {
    return (
        <>
            <div id="layout-container">
                <div id="header">
                    <img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-qvFeaNpZsbA_LCjNFZ0NKFt5sZvJn-DThHxDh0KxR4KL38GVcsdrzvYzLBHuMHq1Vo&usqp=CAU" alt="" />
                    <div id="header-links">
                        <Link className='link' to='/add'>Add New Movie</Link>
                    </div>
                </div>
                <div id="main-content">
                    <Sidebar/>
                    <div id="outlet-container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout;