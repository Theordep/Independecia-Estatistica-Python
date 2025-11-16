'use client'

import { useState, useEffect } from 'react'
import { slides } from '@/data/slides'
import NavigationControls from './NavigationControls'
import ProgressBar from './ProgressBar'
import SlideCounter from './SlideCounter'

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  // Navegação com teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'Home') {
        setCurrentSlide(0)
      } else if (e.key === 'End') {
        setCurrentSlide(totalSlides - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative min-h-screen">
      {/* Barra de progresso */}
      <ProgressBar current={currentSlide + 1} total={totalSlides} />

      {/* Contador de slides */}
      <SlideCounter current={currentSlide + 1} total={totalSlides} />

      {/* Conteúdo do slide */}
      <div className="slide-container slide-animate">
        <div className="slide-content">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Controles de navegação */}
      <NavigationControls
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        canGoPrev={currentSlide > 0}
        canGoNext={currentSlide < totalSlides - 1}
      />

      {/* Dica de navegação */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 rounded-xl px-6 py-3 shadow-2xl">
          <p className="text-gray-300 text-center text-lg">
            <kbd className="px-3 py-1 bg-slate-700 rounded text-blue-300 font-mono text-sm">←</kbd>
            {' '}
            <kbd className="px-3 py-1 bg-slate-700 rounded text-blue-300 font-mono text-sm">→</kbd>
            {' '}
            <span className="text-gray-400">ou clique nas setas laterais</span>
          </p>
        </div>
      </div>
    </div>
  )
}

