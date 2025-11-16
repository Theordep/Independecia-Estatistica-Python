export default function Slide09() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        🐍 Exemplo Prático em Python
      </h1>
      
      <h2 className="text-2xl text-blue-600 dark:text-blue-400 text-center font-semibold">
        Simulação Monte Carlo
      </h2>

      <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl">
        <p className="text-xl text-center text-gray-800 dark:text-gray-200 mb-6">
          Vamos simular <strong className="text-blue-600 dark:text-blue-400">1 milhão de lançamentos</strong> de "dois dados" para verificar a independência.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-4xl text-center mb-3">🎲</div>
          <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-white">
            Evento A
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Dado 1 é par
          </p>
          <p className="text-center mt-2 text-blue-600 dark:text-blue-400 font-semibold">
            P(A) ≈ 0.5
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-4xl text-center mb-3">🎲</div>
          <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-white">
            Evento B
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Dado 2 &gt; 4 (5 ou 6)
          </p>
          <p className="text-center mt-2 text-blue-600 dark:text-blue-400 font-semibold">
            P(B) ≈ 2/6 = 0.333
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl shadow-lg border-2 border-green-400">
          <div className="text-4xl text-center mb-3">🎲🎲</div>
          <h3 className="text-lg font-bold text-center mb-2 text-gray-800 dark:text-white">
            Evento A ∩ B
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Dado 1 par <strong>E</strong> Dado 2 &gt; 4
          </p>
          <p className="text-center mt-2 text-green-600 dark:text-green-400 font-semibold">
            Vamos verificar!
          </p>
        </div>
      </div>

      <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-2 border-yellow-400">
        <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-4">
          🎯 Objetivo
        </h3>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          Vamos checar se <strong className="font-mono text-blue-600 dark:text-blue-400">P(A ∩ B) ≈ P(A) × P(B)</strong>
        </p>
      </div>
    </div>
  )
}

