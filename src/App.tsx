import './index.css'

import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  )
}
