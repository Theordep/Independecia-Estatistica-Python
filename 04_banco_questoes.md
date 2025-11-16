# Banco de Questões
## Independência Estatística e suas Aplicações

**Tema:** Independência Estatística  
**Disciplina:** Estatística / Ciência de Dados  
**Nível:** Graduação em Tecnologia/Engenharia

---

## ❓ Questão 1 - Conceitual

### Pergunta
O que significa dizer que dois eventos **A** e **B** são **estatisticamente independentes**? Forneça tanto a definição intuitiva quanto a definição matemática formal.

### Resposta

**Definição Intuitiva:**
Significa que a ocorrência do evento **A** não afeta, de forma alguma, a probabilidade de ocorrência do evento **B**, e vice-versa. Em outras palavras, saber que um evento ocorreu não nos dá nenhuma informação adicional sobre o outro evento.

**Definição Matemática (duas formas equivalentes):**

1. **Regra da Multiplicação:**
   \[P(A \cap B) = P(A) \times P(B)\]
   
   A probabilidade de ambos ocorrerem é o produto de suas probabilidades individuais.

2. **Probabilidade Condicional:**
   \[P(A|B) = P(A)\]
   
   A probabilidade de A, dado que B ocorreu, é igual à probabilidade de A sozinho.

**Exemplo:** Lançar uma moeda e um dado são eventos independentes. Saber que saiu "Cara" na moeda não muda a probabilidade de sair "6" no dado.

---

## ❓ Questão 2 - Diferenciação

### Pergunta
Eventos **mutuamente exclusivos** são **independentes**? Justifique sua resposta com um exemplo.

### Resposta

**NÃO**, eventos mutuamente exclusivos **não** são independentes. Na verdade, eles são **fortemente dependentes**.

**Por quê?**

Eventos mutuamente exclusivos são aqueles que **não podem ocorrer simultaneamente**. Se um ocorre, temos certeza de que o outro não ocorreu. Isso significa que o conhecimento sobre um evento **altera drasticamente** a probabilidade do outro.

**Exemplo:**

Em um único lançamento de moeda:
- Evento A = "Cara"
- Evento B = "Coroa"

Esses eventos são **mutuamente exclusivos** porque não podem ocorrer juntos:
\[P(A \cap B) = 0\]

**Mas são dependentes:**
- \(P(\text{Coroa}) = 0.5\) (probabilidade original)
- \(P(\text{Coroa} | \text{Cara}) = 0\) (se Cara ocorreu, Coroa não pode ter ocorrido)

Como \(P(B|A) = 0 \neq P(B) = 0.5\), os eventos são **dependentes**.

**Regra geral:** Se dois eventos com probabilidade maior que zero (\(P(A) > 0\) e \(P(B) > 0\)) são mutuamente exclusivos, eles são necessariamente **dependentes**.

---

## ❓ Questão 3 - Cálculo

### Pergunta
A probabilidade de chover em um determinado dia é **0.3**. A probabilidade de um pneu de carro furar é **0.01**. Assumindo que esses eventos são **independentes**, qual é a probabilidade de **chover E o pneu furar no mesmo dia**?

### Resposta

Usando a **regra da multiplicação** para eventos independentes:

\[P(A \cap B) = P(A) \times P(B)\]

Onde:
- \(P(\text{Chuva}) = 0.3\)
- \(P(\text{Pneu furar}) = 0.01\)

Então:

\[P(\text{Chuva} \cap \text{Pneu}) = 0.3 \times 0.01 = 0.003\]

**Resposta:** A probabilidade de chover **E** o pneu furar no mesmo dia é **0.003** (ou **0.3%**).

**Interpretação:** Como os eventos são independentes, a probabilidade de ambos ocorrerem é muito baixa (apenas 3 em 1000 dias).

---

## ❓ Questão 4 - Aplicação (Python)

### Pergunta
Você está analisando dados de uma loja online e coleta informações sobre o **método de pagamento** (Crédito, Débito, PIX) e o **valor da compra** (Baixo, Médio, Alto). Você quer verificar se o método de pagamento é **independente** do valor da compra.

**a)** Qual teste estatístico você deve usar?  
**b)** Qual biblioteca Python você utilizaria?  
**c)** Como interpretar os resultados?

### Resposta

**a) Teste Estatístico:**

Você deve usar o **Teste Qui-Quadrado (χ²) de Independência**.

Este teste é apropriado porque:
- Ambas as variáveis são **categóricas** (não numéricas)
- Queremos testar a **independência** entre elas
- Temos uma tabela de contingência (cruzamento de categorias)

**b) Biblioteca Python:**

Use a biblioteca **SciPy**, especificamente a função `chi2_contingency`:

```python
from scipy.stats import chi2_contingency
import numpy as np

# Exemplo de tabela de contingência
#                Baixo | Médio | Alto
# Crédito:         50  |  100  |  150
# Débito:          80  |   60  |   40
# PIX:             70  |   90  |   60

observed = np.array([
    [50, 100, 150],  # Crédito
    [80,  60,  40],  # Débito
    [70,  90,  60]   # PIX
])

# Realizar o teste
chi2, p_value, dof, expected = chi2_contingency(observed)

print(f"Estatística χ²: {chi2:.4f}")
print(f"P-valor: {p_value:.6f}")
```

**c) Interpretação dos Resultados:**

- **Hipótese Nula (H0):** Método de pagamento e valor da compra **são independentes**.
- **Hipótese Alternativa (H1):** As variáveis **são dependentes** (há associação).

**Critério de decisão** (usando α = 0.05):

1. **Se p-valor < 0.05:**
   - ✅ **Rejeitamos H0**
   - Conclusão: As variáveis **são dependentes**
   - Exemplo de interpretação: "Clientes que pagam com crédito tendem a fazer compras de maior valor"

2. **Se p-valor ≥ 0.05:**
   - ❌ **Não rejeitamos H0**
   - Conclusão: Não há evidência estatística de dependência
   - Exemplo de interpretação: "O método de pagamento não parece influenciar o valor da compra"

---

## ❓ Questão 5 - Aplicação (Machine Learning)

### Pergunta
Explique qual é a suposição "**ingênua**" (naive) que o classificador **Naive Bayes** faz sobre as features (variáveis preditoras). Por que essa suposição é importante? Por que o algoritmo funciona bem mesmo quando essa suposição é violada?

### Resposta

### A Suposição "Ingênua"

O classificador **Naive Bayes** assume que todas as **features são estatisticamente independentes umas das outras**, dado o rótulo da classe.

**Matematicamente:**

\[P(x_1, x_2, ..., x_n | C) = P(x_1|C) \times P(x_2|C) \times ... \times P(x_n|C)\]

Onde:
- \(x_1, x_2, ..., x_n\) são as features
- \(C\) é a classe (rótulo)

**Exemplo prático (classificação de spam):**

O modelo assume que a probabilidade de aparecer a palavra "viagra" é **independente** da probabilidade de aparecer "dinheiro", dado que o e-mail é spam.

\[P(\text{"viagra", "dinheiro"} | \text{spam}) = P(\text{"viagra"} | \text{spam}) \times P(\text{"dinheiro"} | \text{spam})\]

### Por que essa Suposição é Importante?

1. **Simplificação Computacional:**
   - Sem a suposição, teríamos que estimar a probabilidade conjunta de **todas as combinações** de features, o que é computacionalmente inviável para muitas features.

2. **Eficiência:**
   - Com a suposição, basta calcular probabilidades individuais e multiplicá-las.
   - O algoritmo é **extremamente rápido** (complexidade linear).

3. **Poucos Dados:**
   - Requer menos dados de treinamento para estimar os parâmetros.

### Por que Funciona Mesmo quando a Suposição é Violada?

Na prática, as features quase **nunca** são realmente independentes (ex: "viagra" e "dinheiro" aparecem juntas com frequência em spam). Ainda assim, o Naive Bayes funciona bem porque:

1. **Robustez à Violação:**
   - O que importa para classificação é a **ordem relativa** das probabilidades, não seus valores exatos.
   - Mesmo que as probabilidades individuais estejam "erradas", a classe com maior probabilidade ainda tende a ser a correta.

2. **Desempenho Empírico:**
   - Em muitos problemas reais (classificação de texto, diagnóstico médico), o Naive Bayes alcança performance comparável a algoritmos mais complexos.

3. **Tradeoff:**
   - Perde-se um pouco de precisão teórica, mas ganha-se **muito** em velocidade e simplicidade.

**Conclusão:** O Naive Bayes é um exemplo de como uma suposição simplificadora (independência) pode levar a um algoritmo prático e eficiente, mesmo quando a suposição não é perfeitamente verdadeira.

---

## 🎓 Notas para Estudo

### Conceitos-Chave a Revisar:
✅ Definição de independência (regra da multiplicação e probabilidade condicional)  
✅ Diferença entre independência e eventos mutuamente exclusivos  
✅ Teste Qui-Quadrado de Independência  
✅ Aplicações em Machine Learning (Naive Bayes, seleção de features)  
✅ Implementação prática em Python (scipy.stats)

### Tópicos para Aprofundamento:
- Independência condicional
- Modelos gráficos probabilísticos (Redes Bayesianas)
- Teste de Fisher (alternativa ao Qui-Quadrado para amostras pequenas)
- V de Cramér (medida de força de associação)

---

**Data de elaboração:** Novembro/2025  
**Para:** Banco de Questões da Turma  
**Tema:** Independência Estatística e suas Aplicações

