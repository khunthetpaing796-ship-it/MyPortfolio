import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ScrollProgress'


export default function Layout() {
    const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <ScrollProgress />
      <ScrollToTop />

      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -top-40 -left-24 h-72 w-72 rounded-full bg-flame-500/20 blur-3xl" />
        <div className="animate-float absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl [animation-delay:3s]" />
        <div className="animate-float absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl [animation-delay:6s]" />
      </div>

      <Navbar />

      <main key={location.key} className="animate-fade-in">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}