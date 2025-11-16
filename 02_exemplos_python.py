"""
Exemplos Práticos em Python
Tema: Independência Estatística e suas Aplicações

Este arquivo contém os códigos Python mencionados nos slides 10 e 15.
Destinado a estudantes de graduação em tecnologia/engenharia.
"""

# ==============================================================================
# EXEMPLO 1: SIMULAÇÃO DE INDEPENDÊNCIA COM DADOS
# Corresponde ao Slide 10
# ==============================================================================

import numpy as np

print("=" * 60)
print("EXEMPLO 1: SIMULAÇÃO DE INDEPENDÊNCIA ENTRE DOIS DADOS")
print("=" * 60)

# Definir o número de simulações (1 milhão de lançamentos)
N = 1000000

# Simular N lançamentos de dois dados (valores de 1 a 6)
dado1 = np.random.randint(1, 7, size=N)
dado2 = np.random.randint(1, 7, size=N)

# Definir os eventos
# Evento A: Dado 1 é par (2, 4 ou 6)
A = (dado1 % 2 == 0)

# Evento B: Dado 2 é maior que 4 (ou seja, 5 ou 6)
B = (dado2 > 4)

# Calcular as probabilidades empíricas
p_A = np.mean(A)  # Proporção de vezes que A ocorreu
p_B = np.mean(B)  # Proporção de vezes que B ocorreu

# Calcular a probabilidade da interseção (A e B ocorrem simultaneamente)
# (dado1 é par) E (dado2 > 4)
p_A_e_B = np.mean(A & B)

# Testar a regra da multiplicação para independência
print(f"\nSimulação com N={N:,} lançamentos:")
print("-" * 60)
print(f"P(A) [Dado 1 ser par]:           {p_A:.6f}")
print(f"P(B) [Dado 2 > 4]:               {p_B:.6f}")
print(f"P(A) x P(B) [Produto teorico]:   {p_A * p_B:.6f}")
print("-" * 60)
print(f"P(A inter B) [Observado]:        {p_A_e_B:.6f}")
print("-" * 60)

# Verificar a diferença
diferenca = abs((p_A * p_B) - p_A_e_B)
print(f"Diferença absoluta:              {diferenca:.6f}")

# Interpretacao
print("\n>>> INTERPRETACAO:")
if diferenca < 0.001:  # Tolerancia de 0.1%
    print("[OK] Os valores sao praticamente identicos!")
    print("     A simulacao CONFIRMA que os eventos sao INDEPENDENTES.")
    print("     O resultado de um dado NAO influencia o resultado do outro.")
else:
    print("[!] Os valores diferem significativamente.")
    print("    Pode haver dependencia entre os eventos.")

print("\n" + "=" * 60)
print()


# ==============================================================================
# EXEMPLO 2: TESTE QUI-QUADRADO DE INDEPENDÊNCIA
# Corresponde ao Slide 15
# ==============================================================================

from scipy.stats import chi2_contingency

print("=" * 60)
print("EXEMPLO 2: TESTE QUI-QUADRADO (Chi^2) DE INDEPENDENCIA")
print("=" * 60)

# Cenário: Academia quer saber se o Turno (Linhas) é independente do Plano (Colunas)
# Dados coletados durante um mês

print("\n>>> CENARIO:")
print("Uma academia de ginastica coletou dados sobre o turno de treino dos")
print("alunos e o plano de assinatura escolhido. Queremos saber se o turno")
print("de treino e INDEPENDENTE do tipo de plano.\n")

# Dados observados (Tabela de Contingência):
#              Plano Básico | Plano Premium
# Manhã:            50      |      20
# Tarde:            30      |      30
# Noite:            40      |      60

observed_data = np.array([
    [50, 20],  # Manhã:  50 básico, 20 premium
    [30, 30],  # Tarde:  30 básico, 30 premium
    [40, 60]   # Noite:  40 básico, 60 premium
])

print(">>> Tabela de Observacao (Dados Coletados):")
print("-" * 40)
print("             Básico | Premium | Total")
print("-" * 40)
print(f"Manhã        {observed_data[0, 0]:6d} | {observed_data[0, 1]:7d} | {observed_data[0].sum():5d}")
print(f"Tarde        {observed_data[1, 0]:6d} | {observed_data[1, 1]:7d} | {observed_data[1].sum():5d}")
print(f"Noite        {observed_data[2, 0]:6d} | {observed_data[2, 1]:7d} | {observed_data[2].sum():5d}")
print("-" * 40)
print(f"Total        {observed_data[:, 0].sum():6d} | {observed_data[:, 1].sum():7d} | {observed_data.sum():5d}")
print("-" * 40)

# Realizar o teste de independência
# H0 (Hipótese Nula): Turno e Plano SÃO independentes
# H1 (Hipótese Alternativa): Turno e Plano SÃO dependentes

chi2, p_value, dof, expected_data = chi2_contingency(observed_data)

print("\n>>> TESTE DE HIPOTESE:")
print("-" * 60)
print("H0 (Hipotese Nula):        Turno e Plano SAO independentes")
print("H1 (Hipotese Alternativa): Turno e Plano SAO dependentes")
print("-" * 60)

print("\n>>> RESULTADOS DO TESTE:")
print("-" * 60)
print(f"Estatistica Chi-Quadrado: {chi2:.4f}")
print(f"P-valor (p-value):        {p_value:.6f}")
print(f"Graus de Liberdade (dof): {dof}")
print("-" * 60)

print("\n>>> Tabela de Valores ESPERADOS (se H0 fosse verdadeira):")
print("-" * 40)
print("             Básico | Premium")
print("-" * 40)
print(f"Manhã        {expected_data[0, 0]:6.2f} | {expected_data[0, 1]:7.2f}")
print(f"Tarde        {expected_data[1, 0]:6.2f} | {expected_data[1, 1]:7.2f}")
print(f"Noite        {expected_data[2, 0]:6.2f} | {expected_data[2, 1]:7.2f}")
print("-" * 40)

# Interpretacao do P-valor
alpha = 0.05  # Nivel de significancia padrao (5%)

print("\n>>> INTERPRETACAO:")
print("-" * 60)
print(f"Nivel de significancia (alfa): {alpha}")
print(f"P-valor obtido:                {p_value:.6f}")
print("-" * 60)

if p_value < alpha:
    print(f"\n[OK] CONCLUSAO: P-valor ({p_value:.6f}) < {alpha}")
    print("     -> REJEITAMOS a Hipotese Nula (H0).")
    print("     -> As variaveis (Turno e Plano) SAO DEPENDENTES.")
    print("\n>>> Isso significa que:")
    print("    - O turno de treino INFLUENCIA a escolha do plano (ou vice-versa).")
    print("    - Exemplo: Pessoas que treinam a noite tendem mais ao Premium.")
    print("    - A academia pode usar isso para campanhas de marketing direcionadas!")
else:
    print(f"\n[!] CONCLUSAO: P-valor ({p_value:.6f}) >= {alpha}")
    print("    -> NAO REJEITAMOS a Hipotese Nula (H0).")
    print("    -> Nao ha evidencia estatistica de dependencia.")
    print("\n>>> Isso significa que:")
    print("    - O turno de treino NAO parece influenciar a escolha do plano.")
    print("    - As diferencas observadas podem ser apenas variacao aleatoria.")

print("\n" + "=" * 60)
print()


# ==============================================================================
# BÔNUS: VISUALIZAÇÃO DOS RESULTADOS
# ==============================================================================

print("=" * 60)
print("BÔNUS: DICAS PARA VISUALIZAÇÃO")
print("=" * 60)
print("\nPara visualizar os dados, você pode usar matplotlib/seaborn:")
print("""
import matplotlib.pyplot as plt
import seaborn as sns

# Criar heatmap da tabela de contingência
plt.figure(figsize=(8, 5))
sns.heatmap(observed_data, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Básico', 'Premium'],
            yticklabels=['Manhã', 'Tarde', 'Noite'])
plt.title('Distribuição: Turno vs. Plano de Assinatura')
plt.xlabel('Plano')
plt.ylabel('Turno')
plt.show()
""")

print("\n" + "=" * 60)
print("FIM DOS EXEMPLOS")
print("=" * 60)

