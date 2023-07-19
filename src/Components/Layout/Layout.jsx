import './Layout';
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <>
            <div id="layout-container">
                Layout
                <Outlet />
            </div>
        </>
    )
}
export default Layout;