export default function Slide01() {
  return (
    <div className="text-center space-y-10">
      {/* Ícone decorativo melhorado */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>
          <div className="relative w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-400/30">
            <span className="text-7xl">📊</span>
          </div>
        </div>
      </div>

      {/* Título principal - Maior e mais visível */}
      <h1 className="text-6xl md:text-7xl font-black leading-tight" style={{
        background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 60px rgba(59, 130, 246, 0.5)'
      }}>
        Independência Estatística
      </h1>
      
      {/* Subtítulo - Maior contraste */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-300 px-8">
        O Pilar Oculto da Análise de Dados
      </h2>

      {/* Linha separadora decorativa */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-1 w-24 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
        <div className="h-1 w-24 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
      </div>

      {/* Descrição - Texto maior */}
      <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light">
        Entendendo como eventos se relacionam (ou não)
      </p>

      {/* Informações do grupo - Card melhorado */}
      <div className="mt-16 pt-8">
        <div className="inline-block px-12 py-6 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.6) 0%, rgba(30, 41, 59, 0.6) 100%)',
          border: '2px solid rgba(59, 130, 246, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <p className="text-xl text-gray-300 space-y-3">
            {/* ⭐ Personalize com suas informações */}
            <span className="block font-semibold text-blue-300">Seminário de Estatística Aplicada</span>
            <span className="block">Pedro Ernesto, Gabriel Mensor, Matheus Constante e Rafael</span>
            <span className="block text-lg text-gray-400">Novembro/2025</span>
          </p>
        </div>
      </div>
    </div>
  )
}

