import CodeBlock from '../CodeBlock'

export default function Slide15() {
  const code = `from scipy.stats import chi2_contingency
import numpy as np

# Dados observados (Tabela de Contingência)
#              Plano Básico | Plano Premium
# Manhã:            50      |      20
# Tarde:            30      |      30
# Noite:            40      |      60

observed_data = np.array([
    [50, 20],  # Manhã
    [30, 30],  # Tarde
    [40, 60]   # Noite
])

# Realizar o teste de independência
chi2, p_value, dof, expected_data = chi2_contingency(observed_data)

print(f"Estatística χ²: {chi2:.4f}")
print(f"P-valor: {p_value:.6f}")
print(f"Graus de Liberdade: {dof}")

# Interpretação
alpha = 0.05
if p_value < alpha:
    print("Rejeitamos H0: As variáveis SÃO DEPENDENTES.")
else:
    print("Não rejeitamos H0.")`

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
        <span className="text-4xl mr-3">💻</span>
        Código Python - χ²
      </h1>

      <CodeBlock code={code} language="python" />

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
            📊 Resultado Esperado
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            χ² = 16.45, p-valor = 0.000267
          </p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
            ✅ Conclusão
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Rejeitamos H0: <strong>Turno e Plano são DEPENDENTES!</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

