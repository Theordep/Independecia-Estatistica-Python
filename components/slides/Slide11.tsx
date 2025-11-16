import MathFormula from '../MathFormula'

export default function Slide11() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        📊 Resultados da Simulação
      </h1>

      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl font-mono text-sm">
        <pre className="text-gray-800 dark:text-gray-200">
{`Simulação com N=1,000,000 lançamentos:
────────────────────────────────────────────────
P(A) [Dado 1 ser par]:     0.4999
P(B) [Dado 2 > 4]:         0.3333
P(A) × P(B):               0.1666
────────────────────────────────────────────────
P(A ∩ B) [Observado]:      0.1666
────────────────────────────────────────────────`}
        </pre>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">P(A)</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0.4999</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">≈ 0.5 (esperado)</p>
        </div>

        <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
          <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">P(B)</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">0.3333</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">≈ 0.333 (esperado)</p>
        </div>

        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl text-center border-2 border-green-400">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">P(A) × P(B)</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">0.1666</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Produto teórico</p>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl border-2 border-green-500">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white flex items-center justify-center">
          <span className="text-4xl mr-3">✅</span>
          Conclusão
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-lg text-center">
              <MathFormula>P(A ∩ B) = 0.1666</MathFormula>
              {' '}≈{' '}
              <MathFormula>P(A) × P(B) = 0.1666</MathFormula>
            </p>
          </div>
          <p className="text-center text-xl font-semibold text-gray-800 dark:text-white">
            Os valores são (quase) idênticos! 🎯
          </p>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            A simulação <strong className="text-green-600 dark:text-green-400">CONFIRMA</strong> que os eventos são INDEPENDENTES.
          </p>
        </div>
      </div>
    </div>
  )
}

