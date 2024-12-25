import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <button onClick={() => {
          // Add your logout functionality here
          console.log('Logout button clicked');
        }}>
          Logout
        </button>
        <Outlet />
        
    </div>
  )
}

export default Layout
