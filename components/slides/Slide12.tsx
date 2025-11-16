export default function Slide12() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        E no Mundo Real? 🌍
      </h1>
      
      <h2 className="text-2xl text-blue-600 dark:text-blue-400 text-center font-semibold mb-8">
        Tabelas de Contingência
      </h2>

      <div className="p-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl">
        <p className="text-xl text-gray-800 dark:text-gray-200 text-center">
          Na prática, <strong className="text-orange-600 dark:text-orange-400">não temos as probabilidades verdadeiras</strong>; temos <strong>dados observados</strong>.
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="text-3xl mr-3">📝</span>
          Exemplo
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Queremos saber se <strong>"Gênero"</strong> é independente de <strong>"Preferência de Voto (Partido A, B, C)"</strong>.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900/30">
                <th className="border border-gray-300 dark:border-gray-600 p-3">Gênero</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">Partido A</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">Partido B</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3">Partido C</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Masculino</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">120</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">80</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">50</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Feminino</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">90</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">110</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">70</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          Coletamos dados e montamos uma <strong className="text-blue-600 dark:text-blue-400">Tabela de Contingência</strong> (ou Tabela Cruzada).
        </p>
      </div>
    </div>
  )
}

