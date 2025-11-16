# 📊 Seminário: Independência Estatística e suas Aplicações

## Pacote Completo de Materiais para Apresentação Universitária

Este repositório contém todos os materiais necessários para uma apresentação de seminário de **40 minutos** sobre **Independência Estatística**, destinado a estudantes de graduação em tecnologia/engenharia.

---

## 📁 Estrutura dos Arquivos

### 1️⃣ **`01_roteiro_slides.md`**
- **Descrição:** Roteiro detalhado com o conteúdo de todos os 18 slides
- **Conteúdo:** 
  - Fundamentos teóricos
  - Exemplos práticos
  - Aplicações em Machine Learning
  - Conclusões
- **Tempo estimado:** 30-35 minutos de apresentação

### 2️⃣ **`02_exemplos_python.py`**
- **Descrição:** Códigos Python completos e comentados
- **Conteúdo:**
  - Exemplo 1: Simulação de independência com dados (1 milhão de lançamentos)
  - Exemplo 2: Teste Qui-Quadrado de independência (academia)
  - Código pronto para execução
- **Bibliotecas necessárias:** `numpy`, `scipy`

### 3️⃣ **`03_resumo_tecnico.md`**
- **Descrição:** Resumo técnico de 1-2 páginas
- **Conteúdo:**
  - Definições formais
  - Diferença entre independência e dependência
  - Teste Qui-Quadrado explicado
  - Aplicações em Ciência de Dados
  - Referências e links úteis (5 recursos)

### 4️⃣ **`04_banco_questoes.md`**
- **Descrição:** 5 perguntas e respostas para estudo
- **Conteúdo:**
  - Questões conceituais
  - Questões de cálculo
  - Questões aplicadas (Python e ML)
  - Respostas completas e detalhadas

---

## 🚀 Como Utilizar este Material

### Para Apresentadores:

1. **Preparação dos Slides:**
   - Use o arquivo `01_roteiro_slides.md` como base
   - Crie slides visuais no PowerPoint/Google Slides seguindo o roteiro
   - Cada "Slide X" corresponde a um slide da apresentação

2. **Demonstrações em Python:**
   - Execute o arquivo `02_exemplos_python.py` **antes** da apresentação
   - Anote os resultados para mostrar nos slides 11 e 15
   - Opção: Execute ao vivo durante a apresentação (mais impactante!)

3. **Distribuição:**
   - Compartilhe `03_resumo_tecnico.md` com a turma após a apresentação
   - Disponibilize `04_banco_questoes.md` para estudo

### Para Estudantes (Audiência):

1. Siga a apresentação pelos slides
2. Teste os códigos Python no seu ambiente
3. Revise o resumo técnico após a apresentação
4. Use o banco de questões para autoavaliação

---

## 💻 Requisitos Técnicos

### Python e Bibliotecas

**Versão do Python:** 3.7 ou superior

**Instalação das dependências:**

```bash
pip install numpy scipy matplotlib seaborn
```

**Bibliotecas utilizadas:**
- `numpy` (versão 2.3.2 ou compatível) - Simulações e arrays
- `scipy` (mais recente) - Teste Qui-Quadrado
- `matplotlib` / `seaborn` (opcional) - Visualizações

### Executando os Exemplos

```bash
python 02_exemplos_python.py
```

**Tempo de execução:** ~2-3 segundos (simulação de 1 milhão de lançamentos)

**Saída esperada:**
- Probabilidades calculadas da simulação de dados
- Resultados do teste Qui-Quadrado
- Interpretação estatística dos resultados

---

## 📋 Formato da Apresentação

### ⏰ Tempo Total: 40 minutos

- **30-35 minutos:** Apresentação dos slides
- **5-10 minutos:** Perguntas e discussão

### 📊 Estrutura dos Slides (18 slides)

| Bloco | Slides | Tempo | Tema |
|-------|--------|-------|------|
| **1. Fundamentos** | 1-6 | 10 min | Conceitos básicos e definições |
| **2. Exemplos** | 7-11 | 10 min | Independência vs. dependência + Simulação |
| **3. Testes e Aplicações** | 12-16 | 10-15 min | Qui-Quadrado + ML |
| **4. Conclusão** | 17-18 | 5 min | Resumo + Perguntas |

---

## 🎯 Público-Alvo

- **Nível:** Graduação em Tecnologia / Engenharia
- **Pré-requisitos:** Noções básicas de probabilidade
- **Conhecimento de Python:** Desejável, mas não obrigatório

---

## 📚 Tópicos Cobertos

### Teoria
✅ Definição de independência estatística  
✅ Regra da multiplicação  
✅ Probabilidade condicional  
✅ Independência vs. dependência  
✅ Independência vs. eventos mutuamente exclusivos  

### Prática
✅ Simulação Monte Carlo (1 milhão de lançamentos)  
✅ Teste Qui-Quadrado de Independência  
✅ Implementação em Python (NumPy + SciPy)  
✅ Interpretação de p-valores  

### Aplicações
✅ Machine Learning (Naive Bayes)  
✅ Seleção de features  
✅ Análise de dados categóricos  
✅ Tabelas de contingência  

---

## 🔗 Recursos Adicionais

### Links Úteis (incluídos no resumo técnico):

1. **SciPy Documentation** - Função `chi2_contingency`
2. **Khan Academy** - Vídeos sobre independência
3. **Naive Bayes Explained** - Artigo sobre aplicações
4. **PennState STAT 414** - Material universitário
5. **Python Data Science Handbook** - Exemplos práticos

---

## ✅ Checklist para a Apresentação

### Antes da Apresentação:
- [ ] Ler todo o roteiro de slides
- [ ] Executar os códigos Python e verificar resultados
- [ ] Preparar slides visuais (PowerPoint/Google Slides)
- [ ] Testar equipamento (projetor, microfone)
- [ ] Imprimir resumo técnico (opcional)

### Durante a Apresentação:
- [ ] Seguir o tempo de cada bloco (10-10-15-5 minutos)
- [ ] Demonstrar códigos Python (slides 10 e 15)
- [ ] Interagir com a audiência
- [ ] Responder perguntas claramente

### Após a Apresentação:
- [ ] Compartilhar materiais com a turma
- [ ] Disponibilizar códigos (GitHub/Drive)
- [ ] Coletar feedback
- [ ] Adicionar ao banco de questões da disciplina

---

## 📝 Material Obrigatório (Conforme Solicitado)

✅ **Slides:** 18 slides (dentro do limite de 15-20)  
✅ **Exemplos em Python:** 2 exemplos completos e comentados  
✅ **Resumo escrito:** 1-2 páginas com referências  
✅ **Banco de questões:** 5 perguntas e respostas  

---

## 👥 Créditos e Informações

**Tema:** Independência Estatística e suas Aplicações  
**Disciplina:** Estatística / Ciência de Dados  
**Nível:** Graduação  
**Data:** Novembro/2025  
**Duração:** 40 minutos (35 min apresentação + 5 min perguntas)  

---

## 📧 Suporte

Para dúvidas sobre o conteúdo:
- Revise o arquivo `03_resumo_tecnico.md` (seção de referências)
- Consulte os links úteis fornecidos
- Execute os códigos Python para experimentar

---

## 📄 Licença

Este material foi desenvolvido para fins educacionais.  
Sinta-se livre para adaptar e utilizar em contextos acadêmicos.

---

**Boa apresentação! 🎉**

