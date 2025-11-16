# 📊 Independência Estatística - Apresentação Interativa

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Python](https://img.shields.io/badge/Python-3.11+-green?style=for-the-badge&logo=python)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

**Seminário universitário completo de 40 minutos sobre Independência Estatística**

[🚀 Demo](#-como-executar) • [📚 Documentação](#-estrutura-do-projeto) • [🎨 Screenshots](#-preview) • [📖 Guias](#-documentação)

</div>

---

## 🎯 Sobre o Projeto

Este repositório contém uma **apresentação interativa completa** sobre Independência Estatística, desenvolvida para um seminário universitário de 40 minutos. O projeto inclui:

- ✅ **Frontend Next.js** com 18 slides interativos
- ✅ **Design profissional** otimizado para projetor de faculdade
- ✅ **Códigos Python** testados (simulação Monte Carlo + teste χ²)
- ✅ **Fórmulas matemáticas** com explicações de como ler
- ✅ **Material completo** (slides, resumo técnico, banco de questões)
- ✅ **Documentação extensiva** e guias de uso

---

## ✨ Funcionalidades

### 🎨 **Frontend Interativo**

- Navegação por teclado (← → Home End Espaço)
- Navegação por mouse (botões laterais + menu dropdown)
- Barra de progresso visual
- Contador de slides
- Syntax highlighting para código Python
- Fórmulas matemáticas formatadas
- Design responsivo e dark mode
- Animações suaves

### 📊 **Conteúdo Completo**

**18 Slides organizados em 4 blocos:**

1. **Fundamentos (Slides 1-6)** - Conceitos básicos e definições
2. **Exemplos e Contraste (Slides 7-11)** - Casos práticos + Simulação Python
3. **Testes e Aplicações (Slides 12-16)** - Qui-Quadrado + Machine Learning
4. **Conclusão (Slides 17-18)** - Resumo + Perguntas

### 🐍 **Exemplos em Python**

- **Simulação:** 1 milhão de lançamentos de dados verificando independência
- **Teste χ²:** Exemplo real com dados de academia de ginástica
- Código comentado e pronto para executar

---

## 🚀 Como Executar

### **Pré-requisitos**

- Node.js 18+ ([Download](https://nodejs.org/))
- npm ou yarn

### **Instalação Rápida**

```bash
# 1. Clone o repositório
git clone https://github.com/Theordep/Independecia-Estatistica-Python.git
cd Independecia-Estatistica-Python

# 2. Instale as dependências
npm install

# 3. Execute a apresentação
npm run dev
```

Acesse: **http://localhost:3000** 🎉

### **Executar Códigos Python**

```bash
python 02_exemplos_python.py
```

---

## 📁 Estrutura do Projeto

```
trabalho-estatistica/
│
├── 📚 Materiais Originais (Markdown)
│   ├── 01_roteiro_slides.md          # Roteiro detalhado dos 18 slides
│   ├── 02_exemplos_python.py         # Códigos Python testados
│   ├── 03_resumo_tecnico.md          # Resumo de 1-2 páginas
│   ├── 04_banco_questoes.md          # 5 perguntas e respostas
│   ├── GUIA_DE_APRESENTACAO.md       # Guia completo de apresentação
│   ├── SUMARIO_EXECUTIVO.md          # Visão geral do projeto
│   └── INDICE_VISUAL.md              # Mapa de navegação
│
├── 🎨 Frontend Next.js
│   ├── app/                          # Aplicação Next.js
│   ├── components/                   # Componentes React
│   │   ├── slides/                   # 18 slides completos
│   │   ├── CodeBlock.tsx             # Highlight de código
│   │   ├── MathFormula.tsx           # Fórmulas matemáticas
│   │   └── ...
│   ├── data/                         # Dados dos slides
│   ├── public/images/                # Imagens da apresentação
│   └── ...
│
└── 📖 Documentação
    ├── README_FRONTEND.md            # Documentação do frontend
    ├── QUICK_START.md                # Início rápido (3 passos)
    ├── GUIA_IMAGENS.md               # Onde adicionar imagens
    ├── MELHORIAS_DESIGN.md           # Detalhes do design
    └── FRONTEND_COMPLETO.md          # Resumo das melhorias
```

---

## 🎨 Preview

### **Slide de Título**
```
┌────────────────────────────────────────┐
│             📊                         │
│                                        │
│   Independência Estatística            │
│   O Pilar Oculto da Análise de Dados  │
│                                        │
│   Entendendo como eventos se relacionam│
└────────────────────────────────────────┘
```

### **Fórmulas com Explicações**
```
┌────────────────────────────────────────┐
│   P(A ∩ B) = P(A) × P(B)              │
│                                        │
│   💡 Como ler: "P de A interseção B"  │
│   é igual a "P de A" VEZES "P de B"   │
│   O símbolo ∩ significa "E"           │
└────────────────────────────────────────┘
```

### **Código Python com Highlighting**
```python
import numpy as np

# Simular 1 milhão de lançamentos
N = 1000000
dado1 = np.random.randint(1, 7, size=N)
dado2 = np.random.randint(1, 7, size=N)

# Verificar independência
p_A = np.mean(dado1 % 2 == 0)
p_B = np.mean(dado2 > 4)
p_A_e_B = np.mean((dado1 % 2 == 0) & (dado2 > 4))

print(f"P(A) × P(B) ≈ P(A ∩ B): {p_A * p_B:.4f} ≈ {p_A_e_B:.4f}")
```

---

## 📖 Documentação

### **Guias Disponíveis:**

| Arquivo | Descrição |
|---------|-----------|
| [`README_FRONTEND.md`](README_FRONTEND.md) | Documentação completa do frontend |
| [`QUICK_START.md`](QUICK_START.md) | Início rápido em 3 passos |
| [`GUIA_IMAGENS.md`](GUIA_IMAGENS.md) | Onde e como adicionar imagens |
| [`GUIA_DE_APRESENTACAO.md`](GUIA_DE_APRESENTACAO.md) | Guia detalhado de apresentação |
| [`MELHORIAS_DESIGN.md`](MELHORIAS_DESIGN.md) | Detalhes técnicos do design |
| [`SUMARIO_EXECUTIVO.md`](SUMARIO_EXECUTIVO.md) | Visão geral executiva |
| [`INDICE_VISUAL.md`](INDICE_VISUAL.md) | Mapa de navegação |

---

## 🎯 Conteúdo dos Slides

### **Bloco 1: Fundamentos (10 min)**
1. Título da apresentação
2. Roteiro
3. Revisão: O que é Probabilidade?
4. O Conceito de Independência ⭐
5. A Definição Matemática (Regra da Multiplicação)
6. A Definição Alternativa (Probabilidade Condicional)

### **Bloco 2: Exemplos e Contraste (10 min)**
7. Independência vs. Dependência
8. Erro Comum: Independência ≠ Mutuamente Exclusivos ⭐
9. Exemplo Prático em Python (Introdução)
10. Código Python - Simulação 💻
11. Resultados da Simulação

### **Bloco 3: Testes e Aplicações (10-15 min)**
12. E no Mundo Real? (Tabelas de Contingência)
13. Teste Qui-Quadrado (χ²)
14. Exemplo Python - Academia
15. Código Python - Teste χ² 💻
16. Por que isso Importa? (Machine Learning) ⭐

### **Bloco 4: Conclusão (5 min)**
17. Resumo
18. Conclusão e Perguntas

---

## 🐍 Exemplos Python

### **Exemplo 1: Simulação de Independência**

```python
import numpy as np

N = 1000000
dado1 = np.random.randint(1, 7, size=N)
dado2 = np.random.randint(1, 7, size=N)

A = (dado1 % 2 == 0)
B = (dado2 > 4)

p_A = np.mean(A)
p_B = np.mean(B)
p_A_e_B = np.mean(A & B)

print(f"P(A) × P(B) = {p_A * p_B:.4f}")
print(f"P(A ∩ B) = {p_A_e_B:.4f}")
# Resultado: ~0.1666 ≈ ~0.1666 ✓ Independentes!
```

### **Exemplo 2: Teste Qui-Quadrado**

```python
from scipy.stats import chi2_contingency
import numpy as np

observed = np.array([
    [50, 20],  # Manhã: Básico, Premium
    [30, 30],  # Tarde: Básico, Premium
    [40, 60]   # Noite: Básico, Premium
])

chi2, p_value, dof, expected = chi2_contingency(observed)

print(f"χ² = {chi2:.4f}")
print(f"p-valor = {p_value:.6f}")
# Resultado: p < 0.05 → Rejeitamos H0 (são dependentes!)
```

---

## 🎨 Design

### **Características:**

- ✅ **Fundo escuro** (#0f172a) - Alto contraste para projetor
- ✅ **Fontes grandes** (20-70px) - Legível do fundo da sala
- ✅ **Cores vibrantes** - Azul brilhante (#60a5fa) para destaques
- ✅ **Fórmulas explicadas** - Todas as fórmulas têm explicação de como ler
- ✅ **Cards modernos** - Glassmorphism com bordas iluminadas
- ✅ **Animações suaves** - Transições profissionais

### **Otimizado para:**

- 🖥️ Projetor de faculdade
- 👥 Audiência de 30-50 pessoas
- 🎯 Apresentação de 40 minutos
- 📺 Resolução 1920x1080 (Full HD)

---

## 🛠️ Tecnologias

### **Frontend**
- Next.js 14
- TypeScript 5.3
- Tailwind CSS 3.4
- React 18
- React Syntax Highlighter

### **Python**
- Python 3.11+
- NumPy 2.3.2
- SciPy 1.16.3

---

## 📚 Referências

1. [Documentação SciPy - chi2_contingency](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.chi2_contingency.html)
2. [Khan Academy - Independência](https://pt.khanacademy.org/math/statistics-probability/probability-library/conditional-probability-independence/v/independent-events)
3. [PennState STAT 414](https://online.stat.psu.edu/stat414/lesson/4/4.1)

---

## 📝 Licença

Este material foi desenvolvido para fins educacionais.  
Sinta-se livre para adaptar e utilizar em contextos acadêmicos.

---

## 👥 Autor

**Desenvolvido para:** Seminário de Estatística e Ciência de Dados  
**Tema:** Independência Estatística e suas Aplicações  
**Duração:** 40 minutos (35 min apresentação + 5 min perguntas)  
**Nível:** Graduação em Tecnologia/Engenharia  
**Data:** Novembro/2025

---

## ⭐ Agradecimentos

Se este material foi útil para você, considere dar uma ⭐ no repositório!

---

<div align="center">

**[⬆ Voltar ao topo](#-independência-estatística---apresentação-interativa)**

Made with ❤️ and 📊

</div>
