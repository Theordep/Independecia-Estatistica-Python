'use client'

interface SlideCounterProps {
  current: number
  total: number
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="fixed top-6 left-6 z-10 bg-slate-800 border-2 border-blue-500/30 rounded-xl px-6 py-3 shadow-2xl">
      <span className="text-2xl font-bold text-white">
        {current} <span className="text-blue-400 mx-1">/</span> <span className="text-gray-400">{total}</span>
      </span>
    </div>
  )
}

