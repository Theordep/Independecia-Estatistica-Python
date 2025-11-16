export default function Slide14() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        🏋️ Exemplo Python - Teste Qui-Quadrado
      </h1>

      <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Cenário: Academia de Ginástica
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          Vamos usar <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">scipy.stats.chi2_contingency</code>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            ❓ Pergunta
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            O <strong>"Turno de Treino"</strong> (Manhã, Tarde, Noite) é independente do <strong>"Plano de Assinatura"</strong> (Básico, Premium)?
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            📊 Dados Coletados
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-900/30">
                  <th className="border border-gray-300 dark:border-gray-600 p-2">Turno</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2">Básico</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-2">Premium</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Manhã</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">50</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">20</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Tarde</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">30</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">30</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold">Noite</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">40</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2">60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-2 border-yellow-400">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          <strong>Observação:</strong> Parece que pessoas que treinam à noite preferem o plano Premium... 🤔
        </p>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
          Mas isso é estatisticamente significativo? Vamos testar!
        </p>
      </div>
    </div>
  )
}

