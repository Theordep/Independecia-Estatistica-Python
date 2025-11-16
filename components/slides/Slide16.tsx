export default function Slide16() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        🤖 Por que isso Importa?
      </h1>
      
      <h2 className="text-3xl text-center text-blue-600 dark:text-blue-400 font-semibold mb-8">
        Aplicações em Machine Learning
      </h2>

      <div className="space-y-6">
        <div className="p-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-3xl mr-3">1️⃣</span>
            Seleção de Features
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Se uma feature (ex: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">"ID do Cliente"</code>) é estatisticamente <strong>independente</strong> da variável alvo (ex: "Comprou"), ela é <strong className="text-red-600 dark:text-red-400">inútil</strong> para o modelo.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="text-3xl mr-3">2️⃣</span>
            Classificador Naive Bayes
          </h3>
          <div className="space-y-3">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Usado para spam, classificação de texto, etc.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Assume "ingenuamente" (naive)</strong> que todas as features (palavras em um e-mail) são <strong>independentes</strong> umas das outras.
            </p>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Exemplo:</p>
              <p className="font-mono text-sm">
                P("viagra" | "dinheiro") é tratado como P("viagra")
              </p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-400">
              <p className="text-gray-700 dark:text-gray-300 text-center">
                <span className="text-2xl mr-2">🤔</span>
                Essa suposição está <strong>errada</strong>, mas o modelo funciona <strong className="text-green-600 dark:text-green-400">surpreendentemente bem</strong> e é muito rápido!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ IMAGEM: Adicione aqui um diagrama ilustrando Naive Bayes ou seleção de features */}
      {/* Sugestão: Diagrama com features conectadas a uma variável alvo, mostrando independência */}
    </div>
  )
}

