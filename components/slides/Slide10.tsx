import CodeBlock from '../CodeBlock'

export default function Slide10() {
  const code = `import numpy as np

# Definir o número de simulações
N = 1000000

# Simular N lançamentos de dois dados (valores de 1 a 6)
dado1 = np.random.randint(1, 7, size=N)
dado2 = np.random.randint(1, 7, size=N)

# Definir os eventos
# Evento A: Dado 1 é par
A = (dado1 % 2 == 0)

# Evento B: Dado 2 é maior que 4 (ou seja, 5 ou 6)
B = (dado2 > 4)

# Calcular as probabilidades
p_A = np.mean(A)
p_B = np.mean(B)

# Calcular a probabilidade da interseção (A e B)
p_A_e_B = np.mean(A & B)

# Testar a regra da multiplicação
print(f"P(A) [Dado 1 ser par]: {p_A:.4f}")
print(f"P(B) [Dado 2 > 4]: {p_B:.4f}")
print(f"P(A) * P(B): {p_A * p_B:.4f}")
print(f"P(A e B) [Observado]: {p_A_e_B:.4f}")`

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
        <span className="text-4xl mr-3">💻</span>
        Código Python - Simulação
      </h1>

      <CodeBlock code={code} language="python" />

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center">
            <span className="text-xl mr-2">📦</span>
            Biblioteca utilizada
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">numpy</code> para simulações eficientes
          </p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">
            <span className="text-xl mr-2">⚡</span>
            Tempo de execução
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            ~2-3 segundos para 1 milhão de simulações
          </p>
        </div>
      </div>
    </div>
  )
}

