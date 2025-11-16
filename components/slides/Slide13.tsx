export default function Slide13() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Teste de Hipótese: Qui-Quadrado (χ²)
      </h1>

      <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
        <p className="text-xl text-center text-gray-800 dark:text-gray-200">
          O teste estatístico mais comum para independência entre <strong>variáveis categóricas</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-400">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3 flex items-center">
            <span className="text-2xl mr-2">H0</span>
            Hipótese Nula
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            As variáveis <strong className="text-green-600 dark:text-green-400">SÃO independentes</strong>.
          </p>
        </div>

        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-400">
          <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3 flex items-center">
            <span className="text-2xl mr-2">H1</span>
            Hipótese Alternativa
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            As variáveis <strong className="text-red-600 dark:text-red-400">SÃO dependentes</strong>.
          </p>
        </div>
      </div>

      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="text-3xl mr-3">⚙️</span>
          Como funciona?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
            <p className="text-gray-700 dark:text-gray-300">
              O teste calcula a diferença entre os dados <strong>Observados</strong> e os dados <strong>Esperados</strong> (assumindo que H0 é verdadeira).
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
            <p className="text-gray-700 dark:text-gray-300">
              Se a diferença for grande, <strong className="text-red-600 dark:text-red-400">rejeitamos H0</strong>.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
            <p className="text-gray-700 dark:text-gray-300">
              O resultado é expresso como um <strong>p-valor</strong>. Se p-valor &lt; 0.05, rejeitamos H0.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

