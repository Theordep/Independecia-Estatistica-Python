import MathFormula from '../MathFormula'

export default function Slide06() {
  return (
    <div className="space-y-8">
      <h1 className="slide-title">
        A Definição Alternativa
      </h1>
      
      <h2 className="slide-subtitle text-center text-3xl text-purple-300">
        💫 Probabilidade Condicional
      </h2>

      {/* Fórmula principal */}
      <div className="card-modern p-10 border-2 border-purple-500/50">
        <p className="text-2xl text-center text-gray-200 mb-8">
          Uma forma <strong className="text-purple-300">mais intuitiva</strong> de ver:
        </p>
        <MathFormula 
          block 
          explanation='"P de A dado B" é igual a "P de A" - Lê-se: a probabilidade de A, sabendo que B já ocorreu, continua sendo a mesma!'
        >
          P(A|B) = P(A)
        </MathFormula>
        <div className="mt-8 p-6 bg-purple-500/10 rounded-xl border-l-4 border-purple-400">
          <p className="text-xl text-center text-gray-300 italic">
            "A probabilidade de A ocorrer, <strong className="text-purple-300">dado que B ocorreu</strong>, é simplesmente... a probabilidade de A."
          </p>
        </div>
      </div>

      {/* Insight importante */}
      <div className="card-modern p-8 bg-yellow-500/10 border-2 border-yellow-500/50">
        <h3 className="text-3xl font-bold text-yellow-300 mb-6 flex items-center justify-center">
          <span className="text-5xl mr-4">💡</span>
          Insight Importante
        </h3>
        <p className="text-2xl text-gray-200 text-center">
          O conhecimento de B <strong className="text-yellow-300">não adiciona NENHUMA informação</strong> sobre A.
        </p>
      </div>

      {/* Exemplo prático */}
      <div className="card-modern p-8">
        <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">
          📝 Exemplo Prático
        </h3>
        <div className="space-y-6">
          <div className="p-6 bg-slate-700/50 rounded-xl">
            <MathFormula block>
              P(Cara | Saiu 6 no dado) = P(Cara) = 0.5
            </MathFormula>
          </div>
          <div className="p-6 bg-blue-500/10 rounded-xl border-l-4 border-blue-400">
            <p className="text-xl text-gray-300 text-center">
              Saber que o dado mostrou 6 <strong className="text-blue-300">não muda em nada</strong> a probabilidade da moeda!
            </p>
            <p className="text-lg text-gray-400 text-center mt-3">
              🎲 e 🪙 são eventos independentes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

