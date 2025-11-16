'use client'

interface NavigationControlsProps {
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
  currentSlide: number
  totalSlides: number
  canGoPrev: boolean
  canGoNext: boolean
}

export default function NavigationControls({
  onPrev,
  onNext,
  onGoTo,
  currentSlide,
  totalSlides,
  canGoPrev,
  canGoNext,
}: NavigationControlsProps) {
  return (
    <>
      {/* Botão Anterior */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-10 
          rounded-full p-5 shadow-2xl transition-all duration-300
          ${!canGoPrev 
            ? 'opacity-20 cursor-not-allowed bg-gray-700' 
            : 'opacity-70 hover:opacity-100 bg-blue-600 hover:bg-blue-500 hover:scale-110'}`}
        aria-label="Slide anterior"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Botão Próximo */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-10 
          rounded-full p-5 shadow-2xl transition-all duration-300
          ${!canGoNext 
            ? 'opacity-20 cursor-not-allowed bg-gray-700' 
            : 'opacity-70 hover:opacity-100 bg-blue-600 hover:bg-blue-500 hover:scale-110'}`}
        aria-label="Próximo slide"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Menu de navegação rápida */}
      <div className="fixed top-6 right-6 z-10">
        <details className="relative">
          <summary className="bg-blue-600 hover:bg-blue-500 rounded-xl p-4 shadow-2xl cursor-pointer transition-all list-none">
            <svg
              className="w-7 h-7 text-white inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-3 bg-slate-800 rounded-xl shadow-2xl p-3 max-h-96 overflow-y-auto w-72 border-2 border-blue-500/30">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className={`w-full text-left px-5 py-3 rounded-lg transition-all text-lg mb-1
                  ${currentSlide === i 
                    ? 'bg-blue-600 text-white font-bold shadow-lg' 
                    : 'text-gray-300 hover:bg-slate-700'}`}
              >
                Slide {i + 1}
              </button>
            ))}
          </div>
        </details>
      </div>
    </>
  )
}

