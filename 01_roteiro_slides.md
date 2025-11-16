# Roteiro Detalhado de Slides
## Independência Estatística: O Pilar Oculto da Análise de Dados

**Total: 18 Slides | Tempo: 30-35 minutos**

---

## 📊 Bloco 1: Fundamentos (10 minutos)

### Slide 1: Título
**Título:** Independência Estatística: O Pilar Oculto da Análise de Dados

**Subtítulo:** Entendendo como eventos se relacionam (ou não)

*(Nomes do Grupo / Disciplina / Professor)*

---

### Slide 2: Roteiro da Apresentação
**O que vamos cobrir hoje?**

- O que é Probabilidade (Revisão Rápida)
- Definindo Independência Estatística (Conceito e Fórmula)
- Independência vs. Dependência (Exemplos Clássicos)
- Como Testar: O Teste Qui-Quadrado (Python)
- Por que isso Importa? (Aplicações em Machine Learning)
- Conclusão e Perguntas

---

### Slide 3: Revisão Rápida: O que é Probabilidade?

**Probabilidade** é a medida da certeza de um evento ocorrer (0 a 1).

**Evento Simples:** Jogar uma moeda (Cara ou Coroa). \(P(\text{Cara}) = 0.5\).

**Evento Composto:** Jogar duas moedas.

**Probabilidade Condicional** \(P(A|B)\): "A probabilidade de A, dado que B já ocorreu."

---

### Slide 4: O Conceito de Independência

**Definição Intuitiva:** Dois eventos são independentes se a ocorrência de um não altera a probabilidade de ocorrência do outro.

**Exemplos:**
- O resultado de um dado influencia a cor que sairá na roleta? **Não.**
- O clima (chover) influencia a probabilidade de alguém levar um guarda-chuva? **Sim.** (Isso é dependência).

---

### Slide 5: A Definição Matemática (Regra da Multiplicação)

**Eventos A e B são independentes se, e somente se:**

\[P(A \cap B) = P(A) \times P(B)\]

(A probabilidade de A **E** B ocorrerem é o produto de suas probabilidades individuais)

**Exemplo:** Qual a \(P(\text{Cara})\) **E** \(P(6 \text{ no dado})\)?

- \(P(A) = 0.5\)
- \(P(B) = 1/6 \approx 0.167\)
- \(P(A \cap B) = 0.5 \times (1/6) = 1/12 \approx 0.083\)

---

### Slide 6: A Definição Alternativa (Prob. Condicional)

**Uma forma mais intuitiva de ver:**

\[P(A|B) = P(A)\]

"A probabilidade de A ocorrer, dado que B ocorreu, é simplesmente... a probabilidade de A."

**O conhecimento de B não adiciona NENHUMA informação sobre A.**

\(P(\text{Cara} | \text{Saiu 6 no dado}) = P(\text{Cara}) = 0.5\)

---

## 📚 Bloco 2: Exemplos e Contraste (10 minutos)

### Slide 7: Independência vs. Dependência

**Independente (com reposição):** Tirar uma carta de um baralho, colocá-la de volta, e tirar outra.
- \(P(\text{Rei na 2ª} | \text{Rei na 1ª}) = P(\text{Rei na 2ª}) = 4/52\).

**Dependente (sem reposição):** Tirar uma carta, deixá-la fora, e tirar outra.
- \(P(\text{Rei na 2ª} | \text{Rei na 1ª}) = 3/51\). **(A probabilidade mudou!)**

---

### Slide 8: Erro Comum: Independência vs. Eventos Mutuamente Exclusivos

**Mutuamente Exclusivos:** Se um acontece, o outro NÃO PODE acontecer. \(P(A \cap B) = 0\).

**Ex:** Em 1 lançamento de moeda, "Cara" e "Coroa" são mutuamente exclusivos.

**⚠️ Importante:** Se dois eventos (com \(P > 0\)) são mutuamente exclusivos, eles são fortemente **DEPENDENTES**. 

Saber que A ocorreu (Cara) nos dá 100% de certeza que B (Coroa) **não** ocorreu.

---

### Slide 9: Exemplo Prático em Python (Simulação)

Vamos simular **1 milhão de lançamentos** de "dois dados" para verificar a independência.

- **Evento A:** Dado 1 é par. \(P(A) \approx 0.5\)
- **Evento B:** Dado 2 é maior que 4. \(P(B) \approx 2/6 = 0.333\)
- **Evento** \((A \cap B)\): Dado 1 par **E** Dado 2 > 4.

**Vamos checar se** \(P(A \cap B) \approx P(A) \times P(B)\).

---

### Slide 10: Código Python - Simulação

```python
import numpy as np

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
print(f"Simulação com N={N} lançamentos:")
print(f"P(A) [Dado 1 ser par]: {p_A:.4f}")
print(f"P(B) [Dado 2 > 4]: {p_B:.4f}")
print(f"P(A) * P(B): {p_A * p_B:.4f}")
print("-" * 30)
print(f"P(A e B) [Observado]: {p_A_e_B:.4f}")
```

**Ver código completo em:** `exemplos_python.py`

---

### Slide 11: Resultados da Simulação

**Resultados esperados:**
- \(P(A) = 0.4999...\) (≈ 0.5)
- \(P(B) = 0.3333...\) (≈ 0.333)
- \(P(A) \times P(B) = 0.1666...\)
- \(P(A \cap B) = 0.1666...\) (observado na simulação)

**✅ Conclusão:** Os valores são (quase) idênticos. A simulação suporta a independência.

---

## 🔬 Bloco 3: Testes e Aplicações (10-15 minutos)

### Slide 12: E no Mundo Real? (Tabelas de Contingência)

Na prática, **não temos as probabilidades verdadeiras**; temos **dados observados**.

**Ex:** Queremos saber se "Gênero" é independente de "Preferência de Voto (Partido A, B, C)".

Coletamos dados e montamos uma **Tabela de Contingência** (ou Tabela Cruzada).

---

### Slide 13: Teste de Hipótese: Qui-Quadrado (\(\chi^2\))

O teste estatístico mais comum para independência entre **variáveis categóricas**.

- **Hipótese Nula (H0):** As variáveis **SÃO independentes**.
- **Hipótese Alternativa (H1):** As variáveis **SÃO dependentes**.

**Como funciona?**
- O teste calcula a diferença entre os dados **Observados** e os dados **Esperados** (assumindo que H0 é verdadeira).
- Se a diferença for grande, rejeitamos H0.

---

### Slide 14: Exemplo Python - Teste Qui-Quadrado

Vamos usar `scipy.stats.chi2_contingency`.

**Cenário:** Uma academia de ginástica quer saber se o "**Turno de Treino** (Manhã, Tarde, Noite)" é independente do "**Plano de Assinatura** (Básico, Premium)".

---

### Slide 15: Código Python - \(\chi^2\)

```python
from scipy.stats import chi2_contingency
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

print("Tabela de Observação:")
print(observed_data)

# Realizar o teste de independência
chi2, p_value, dof, expected_data = chi2_contingency(observed_data)

print("\n--- Resultados do Teste ---")
print(f"Valor da Estatística χ²: {chi2:.4f}")
print(f"P-valor (p-value): {p_value:.6f}")
print(f"Graus de Liberdade (dof): {dof}")
print("\nTabela de Valores Esperados:")
print(expected_data)

# Interpretação do P-valor
alpha = 0.05
print("\n--- Conclusão ---")
if p_value < alpha:
    print(f"P-valor ({p_value:.6f}) é MENOR que {alpha}.")
    print("Rejeitamos H0: As variáveis SÃO DEPENDENTES.")
else:
    print(f"P-valor ({p_value:.6f}) é MAIOR que {alpha}.")
    print("Não rejeitamos H0: Não há evidência de dependência.")
```

**Ver código completo em:** `exemplos_python.py`

---

### Slide 16: Por que isso Importa? (Machine Learning)

**1. Seleção de Features:** 
- Se uma feature (ex: "ID do Cliente") é estatisticamente independente da variável alvo (ex: "Comprou"), ela é **inútil** para o modelo.

**2. Classificador Naive Bayes:**
- Usado para spam, classificação de texto, etc.
- Assume "ingenuamente" (naive) que todas as features (palavras em um e-mail) são **independentes** umas das outras.
- Ex: \(P(\text{"viagra"} | \text{"dinheiro"})\) é tratado como \(P(\text{"viagra"})\).
- Essa suposição está **errada**, mas o modelo funciona surpreendentemente bem e é muito rápido.

---

## 🎯 Bloco 4: Conclusão (5 minutos)

### Slide 17: Resumo

**Independência:** Ocorrência de um evento não afeta a probabilidade do outro.

**Fórmula:** \(P(A \cap B) = P(A) \times P(B)\).

**Teste:** Usamos o Teste Qui-Quadrado (\(\chi^2\)) para verificar a independência em dados observados.

**Aplicação:** Fundamental para simplificar modelos (Naive Bayes) e entender a relação entre variáveis.

---

### Slide 18: Conclusão e Perguntas

**Obrigado!**

🙋 Tempo para perguntas e discussão (5-10 minutos)

---

**Arquivos complementares:**
- `exemplos_python.py` - Códigos Python completos
- `resumo_tecnico.md` - Resumo escrito com referências
- `banco_questoes.md` - 5 perguntas e respostas para estudo

