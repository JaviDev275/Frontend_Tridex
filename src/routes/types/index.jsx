import { RouterProvider } from 'react-router-dom'
import { router } from './PrivateRouters'

const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter