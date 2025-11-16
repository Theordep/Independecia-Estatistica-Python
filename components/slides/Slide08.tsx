import MathFormula from '../MathFormula'

export default function Slide08() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        ⚠️ Erro Comum
      </h1>
      
      <h2 className="text-3xl text-center text-red-600 dark:text-red-400 font-bold mb-8">
        Independência ≠ Eventos Mutuamente Exclusivos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl border-2 border-orange-400">
          <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-4">
            Mutuamente Exclusivos
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Se um acontece, o outro <strong>NÃO PODE</strong> acontecer.
          </p>
          <MathFormula block>P(A ∩ B) = 0</MathFormula>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            <strong>Ex:</strong> Em 1 lançamento de moeda, "Cara" e "Coroa" são mutuamente exclusivos.
          </p>
        </div>

        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-400">
          <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4 flex items-center">
            <span className="text-3xl mr-2">🚨</span>
            Importante!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Se dois eventos (com P &gt; 0) são mutuamente exclusivos, eles são fortemente{' '}
            <strong className="text-red-600 dark:text-red-400">DEPENDENTES</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Saber que A ocorreu (Cara) nos dá 100% de certeza que B (Coroa) <strong>não ocorreu</strong>.
          </p>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Por que são dependentes?
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Inicialmente</p>
            <MathFormula>P(Coroa) = 0.5</MathFormula>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-4xl">→</span>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Dado que Cara ocorreu</p>
            <MathFormula>P(Coroa|Cara) = 0</MathFormula>
          </div>
        </div>
        <p className="text-center mt-6 font-bold text-lg">
          Como P(Coroa|Cara) ≠ P(Coroa), os eventos são <span className="text-red-600 dark:text-red-400">DEPENDENTES</span>!
        </p>
      </div>
    </div>
  )
}

