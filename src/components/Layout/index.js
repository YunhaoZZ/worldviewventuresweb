import { Outlet } from 'react-router-dom'
import TopNavBar from '../TopNavBar'
import Footer from '../Footer'
import './index.scss'

const Layout = () => {
  return (
    <div className="mainContainer">
      <TopNavBar />
      <div className="page">
        <Outlet />
        <Footer />
      </div>
      
    </div>
  )
}

export default Layout