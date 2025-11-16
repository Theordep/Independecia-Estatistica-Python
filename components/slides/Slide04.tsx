export default function Slide04() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        O Conceito de Independência
      </h1>

      <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">
          💡 Definição Intuitiva
        </h2>
        <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Dois eventos são <strong>independentes</strong> se a ocorrência de um{' '}
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            não altera
          </span>{' '}
          a probabilidade de ocorrência do outro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-300 dark:border-green-700">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">✅</span>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
              Independentes
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Exemplo:</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            O resultado de um dado influencia a cor que sairá na roleta?
          </p>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">
            NÃO! 🎲 ↮ 🎡
          </p>
        </div>

        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-300 dark:border-red-700">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">⚠️</span>
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300">
              Dependentes
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Exemplo:</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            O clima (chover) influencia a probabilidade de alguém levar guarda-chuva?
          </p>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-2">
            SIM! 🌧️ → ☂️
          </p>
        </div>
      </div>
    </div>
  )
}

