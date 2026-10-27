
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
