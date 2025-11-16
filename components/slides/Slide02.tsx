export default function Slide02() {
  const topics = [
    { icon: '🔄', title: 'O que é Probabilidade', subtitle: 'Revisão Rápida' },
    { icon: '🎯', title: 'Definindo Independência Estatística', subtitle: 'Conceito e Fórmula' },
    { icon: '⚖️', title: 'Independência vs. Dependência', subtitle: 'Exemplos Clássicos' },
    { icon: '🧪', title: 'Como Testar: O Teste Qui-Quadrado', subtitle: 'Python' },
    { icon: '🤖', title: 'Por que isso Importa?', subtitle: 'Aplicações em Machine Learning' },
    { icon: '💬', title: 'Conclusão e Perguntas', subtitle: 'Discussão' },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
        O que vamos cobrir hoje?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-4xl">{topic.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {topic.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
        <p className="text-lg">⏱️ Tempo estimado: 35 minutos</p>
      </div>
    </div>
  )
}

