import { Flame } from 'lucide-react'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="animate-float">
        <Flame size={56} className="mb-4 text-flame-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
      </div>
      <h1 className="animate-fade-up text-5xl font-extrabold tracking-tight">404</h1>
      <p className="animate-fade-up mt-3 text-slate-600 dark:text-slate-400 [animation-delay:100ms]">
        This page burned out. Let's get you back somewhere warm.
      </p>
      <div className="animate-fade-up mt-8 [animation-delay:200ms]">
        <Button to="/">Back home</Button>
      </div>
    </div>
  )
}