import MathFormula from '../MathFormula'

export default function Slide17() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        📚 Resumo
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-3 flex items-center">
            <span className="text-3xl mr-3">🎯</span>
            Independência
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Ocorrência de um evento <strong>não afeta</strong> a probabilidade do outro.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-200 mb-3 flex items-center">
            <span className="text-3xl mr-3">📐</span>
            Fórmula
          </h3>
          <MathFormula block>
            <span className="text-3xl">P(A ∩ B) = P(A) × P(B)</span>
          </MathFormula>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-3 flex items-center">
            <span className="text-3xl mr-3">🧪</span>
            Teste
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Usamos o <strong>Teste Qui-Quadrado (χ²)</strong> para verificar a independência em dados observados.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl">
          <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-200 mb-3 flex items-center">
            <span className="text-3xl mr-3">🤖</span>
            Aplicação
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Fundamental para simplificar modelos (<strong>Naive Bayes</strong>) e entender a relação entre variáveis.
          </p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center">
        <p className="text-2xl font-bold">
          Independência Estatística: O Pilar da Análise de Dados! 📊
        </p>
      </div>
    </div>
  )
}

