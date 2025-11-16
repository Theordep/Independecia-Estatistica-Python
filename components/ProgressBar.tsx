'use client'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-slate-900/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 transition-all duration-500 shadow-lg"
        style={{ 
          width: `${percentage}%`,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
        }}
      />
    </div>
  )
}

