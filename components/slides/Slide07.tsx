import MathFormula from '../MathFormula'

export default function Slide07() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Independência vs. Dependência
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-400">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4 flex items-center">
            <span className="text-4xl mr-3">✅</span>
            Independente
          </h2>
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
            (com reposição)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tirar uma carta de um baralho, <strong>colocá-la de volta</strong>, e tirar outra.
          </p>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <MathFormula>P(Rei na 2ª | Rei na 1ª) = P(Rei na 2ª) = 4/52</MathFormula>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
            A probabilidade <strong>não mudou!</strong>
          </p>
        </div>

        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-400">
          <h2 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4 flex items-center">
            <span className="text-4xl mr-3">⚠️</span>
            Dependente
          </h2>
          <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
            (sem reposição)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tirar uma carta, <strong>deixá-la fora</strong>, e tirar outra.
          </p>
          <div className="p-3 bg-white dark:bg-gray-800 rounded">
            <MathFormula>P(Rei na 2ª | Rei na 1ª) = 3/51</MathFormula>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center font-bold">
            A probabilidade <strong className="text-red-600 dark:text-red-400">MUDOU!</strong>
          </p>
        </div>
      </div>

      {/* ⭐ IMAGEM: Adicione aqui uma ilustração de cartas sendo retiradas de um baralho */}
      {/* Sugestão: Duas imagens lado a lado mostrando "com reposição" vs "sem reposição" */}
    </div>
  )
}

