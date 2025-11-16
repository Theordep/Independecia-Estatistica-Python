import MathFormula from '../MathFormula'

export default function Slide05() {
  return (
    <div className="space-y-8">
      <h1 className="slide-title">
        A Definição Matemática
      </h1>
      
      <h2 className="slide-subtitle text-center text-3xl">
        ⚡ Regra da Multiplicação
      </h2>

      {/* Fórmula principal com explicação */}
      <div className="card-modern p-10 border-2 border-blue-500/50">
        <p className="text-2xl text-center text-gray-200 mb-8">
          Eventos A e B são <strong className="text-blue-300">independentes</strong> se, e somente se:
        </p>
        <MathFormula 
          block 
          explanation='"P de A interseção B" é igual a "P de A" VEZES "P de B" - O símbolo ∩ significa "E" ou "interseção"'
        >
          P(A ∩ B) = P(A) × P(B)
        </MathFormula>
        <div className="mt-8 p-6 bg-blue-500/10 rounded-xl border-l-4 border-blue-400">
          <p className="text-xl text-center text-gray-300 italic">
            A probabilidade de A <strong className="text-blue-300">E</strong> B ocorrerem é o <strong>produto</strong> de suas probabilidades individuais
          </p>
        </div>
      </div>

      {/* Exemplo prático */}
      <div className="card-modern p-8">
        <h3 className="text-3xl font-bold text-blue-300 mb-6 flex items-center">
          <span className="text-5xl mr-4">📝</span>
          Exemplo Prático
        </h3>
        <p className="text-2xl text-gray-200 mb-8 text-center">
          Qual a probabilidade de tirar <strong className="text-yellow-300">Cara</strong> na moeda <strong className="text-blue-300">E</strong> tirar <strong className="text-green-300">6</strong> no dado?
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 bg-slate-700/50 rounded-xl text-xl">
            <span className="text-gray-200">P(Cara) =</span>
            <MathFormula>0.5</MathFormula>
          </div>
          <div className="flex items-center justify-between p-5 bg-slate-700/50 rounded-xl text-xl">
            <span className="text-gray-200">P(6 no dado) =</span>
            <MathFormula>1/6 ≈ 0.167</MathFormula>
          </div>
          <div className="flex items-center justify-between p-5 bg-green-600/30 rounded-xl text-xl font-bold border-2 border-green-500/50">
            <span className="text-gray-100">P(Cara ∩ 6) =</span>
            <MathFormula>0.5 × (1/6) = 1/12 ≈ 0.083</MathFormula>
          </div>
        </div>
        <p className="text-lg text-gray-400 text-center mt-6 italic">
          💡 Ou seja: ~8.3% de chance de ambos ocorrerem juntos
        </p>
      </div>
    </div>
  )
}

