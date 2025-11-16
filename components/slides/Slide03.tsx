import MathFormula from '../MathFormula'

export default function Slide03() {
  return (
    <div className="space-y-8">
      <h1 className="slide-title">
        Revisão Rápida: O que é Probabilidade?
      </h1>

      <div className="space-y-8">
        {/* Definição principal */}
        <div className="card-modern p-8 text-center border-l-4 border-blue-500">
          <p className="text-2xl text-gray-200 mb-2">
            <strong className="text-blue-300">Probabilidade</strong> é a medida da certeza de um evento ocorrer
          </p>
          <p className="text-xl text-gray-400">(valor entre 0 e 1)</p>
        </div>

        {/* Cards de exemplos */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-modern p-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl">🪙</span>
            </div>
            <h3 className="slide-subtitle text-center text-2xl mb-4">
              Evento Simples
            </h3>
            <p className="text-xl text-gray-300 mb-6 text-center">
              Jogar uma moeda (Cara ou Coroa)
            </p>
            <MathFormula block explanation='"P de Cara" é igual a 0.5, ou seja, 50% de chance'>
              P(Cara) = 0.5
            </MathFormula>
          </div>

          <div className="card-modern p-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-6xl">🎲🎲</span>
            </div>
            <h3 className="slide-subtitle text-center text-2xl mb-4">
              Evento Composto
            </h3>
            <p className="text-xl text-gray-300 mb-6 text-center">
              Jogar duas moedas
            </p>
            <p className="text-lg text-gray-400 text-center">
              Múltiplos resultados possíveis: (Cara,Cara), (Cara,Coroa), (Coroa,Cara), (Coroa,Coroa)
            </p>
          </div>
        </div>

        {/* Probabilidade condicional - Destaque especial */}
        <div className="card-modern p-10 border-2 border-purple-500/50">
          <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">
            💡 Probabilidade Condicional
          </h3>
          <MathFormula block explanation='"P de A dado B" - Lê-se: a probabilidade de A ocorrer, DADO QUE B já ocorreu'>
            P(A|B)
          </MathFormula>
        </div>
      </div>
    </div>
  )
}

