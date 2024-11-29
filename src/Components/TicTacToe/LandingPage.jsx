import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}
export default LandingPage
