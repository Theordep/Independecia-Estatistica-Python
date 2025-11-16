export default function Slide18() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      {/* Ícone de conclusão */}
      <div className="text-9xl animate-bounce">
        🎉
      </div>

      {/* Título principal */}
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white text-center">
        Obrigado!
      </h1>

      {/* Subtítulo */}
      <p className="text-3xl text-gray-600 dark:text-gray-300 text-center">
        Conclusão e Perguntas
      </p>

      {/* Ícones de interação */}
      <div className="flex space-x-8 text-7xl">
        <span>💬</span>
        <span>❓</span>
        <span>🙋</span>
      </div>

      {/* Tempo para discussão */}
      <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl">
        <p className="text-2xl text-center text-gray-800 dark:text-gray-200">
          <strong>5-10 minutos</strong> para discussão e perguntas
        </p>
      </div>

      {/* Contato ou informações adicionais */}
      <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
        <p className="text-lg">Material disponível em:</p>
        {/* ⭐ Personalize com link do GitHub ou Drive */}
        <p className="text-sm mt-2">
          📁 C:\Users\pedro\Documents\trabalho-estatistica\
        </p>
        <p className="text-sm mt-2">
          📚 Resumo técnico, códigos Python e banco de questões inclusos
        </p>
      </div>

      {/* Créditos */}
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>Seminário de Estatística e Ciência de Dados</p>
        <p className="mt-1">Graduação em Tecnologia/Engenharia • Novembro/2025</p>
      </div>
    </div>
  )
}

