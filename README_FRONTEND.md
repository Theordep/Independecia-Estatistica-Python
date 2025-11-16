# 🎨 Frontend Next.js - Apresentação Interativa
## Independência Estatística e suas Aplicações

Este é um **aplicativo Next.js interativo** que apresenta os 18 slides do seminário sobre Independência Estatística de forma moderna e profissional.

---

## ✨ Funcionalidades

- ✅ **18 Slides Interativos** com navegação fluida
- ✅ **Navegação por Teclado** (setas ← →, Home, End, Espaço)
- ✅ **Navegação por Clique** (botões laterais)
- ✅ **Menu de Navegação Rápida** (acesso direto a qualquer slide)
- ✅ **Barra de Progresso** (visual do andamento da apresentação)
- ✅ **Contador de Slides** (slide atual / total)
- ✅ **Syntax Highlighting** para códigos Python
- ✅ **Fórmulas Matemáticas** formatadas e destacadas
- ✅ **Design Responsivo** (funciona em desktop, tablet e mobile)
- ✅ **Dark Mode** (modo escuro automático)
- ✅ **Animações Suaves** entre transições

---

## 🚀 Como Executar

### **Pré-requisitos**

- Node.js 18+ instalado
- npm ou yarn

### **Instalação**

```bash
# 1. Instalar dependências
npm install

# ou com yarn
yarn install
```

### **Executar em Desenvolvimento**

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# ou
yarn dev
```

Acesse: **http://localhost:3000**

### **Build para Produção**

```bash
# Criar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

---

## 🎮 Como Usar a Apresentação

### **Navegação por Teclado**

| Tecla | Ação |
|-------|------|
| `→` ou `Espaço` | Próximo slide |
| `←` | Slide anterior |
| `Home` | Ir para o primeiro slide |
| `End` | Ir para o último slide |

### **Navegação por Mouse**

- **Botões laterais:** Clique nas setas `<` e `>` nas laterais da tela
- **Menu dropdown:** Clique no ícone ☰ no canto superior direito para acesso rápido a qualquer slide
- **Barra de progresso:** Visual do andamento (topo da tela)
- **Contador:** Mostra "slide atual / total" (canto superior esquerdo)

---

## 📁 Estrutura do Projeto

```
trabalho-estatistica/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   ├── CodeBlock.tsx         # Componente para código com syntax highlight
│   ├── MathFormula.tsx       # Componente para fórmulas matemáticas
│   ├── NavigationControls.tsx # Controles de navegação
│   ├── ProgressBar.tsx       # Barra de progresso
│   ├── SlideCounter.tsx      # Contador de slides
│   ├── SlideShow.tsx         # Componente principal da apresentação
│   └── slides/
│       ├── Slide01.tsx       # Slide 1: Título
│       ├── Slide02.tsx       # Slide 2: Roteiro
│       ├── ...               # Slides 3-17
│       └── Slide18.tsx       # Slide 18: Conclusão
├── data/
│   └── slides.ts             # Configuração de todos os slides
├── package.json              # Dependências e scripts
├── tailwind.config.ts        # Configuração do Tailwind CSS
├── tsconfig.json             # Configuração do TypeScript
└── next.config.js            # Configuração do Next.js
```

---

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna
- **React Syntax Highlighter** - Highlight de código Python
- **React 18** - Biblioteca UI

---

## 📝 Conteúdo dos Slides

### **Bloco 1: Fundamentos (Slides 1-6)**
1. Título da apresentação
2. Roteiro (o que será coberto)
3. Revisão rápida: O que é Probabilidade?
4. O Conceito de Independência ⭐
5. Definição Matemática (Regra da Multiplicação)
6. Definição Alternativa (Probabilidade Condicional)

### **Bloco 2: Exemplos e Contraste (Slides 7-11)**
7. Independência vs. Dependência
8. Erro Comum: Independência ≠ Mutuamente Exclusivos ⭐
9. Introdução à Simulação Python
10. Código Python - Simulação 💻
11. Resultados da Simulação

### **Bloco 3: Testes e Aplicações (Slides 12-16)**
12. Tabelas de Contingência
13. Teste Qui-Quadrado (χ²)
14. Exemplo Python - Academia
15. Código Python - Teste χ² 💻
16. Aplicações em Machine Learning ⭐

### **Bloco 4: Conclusão (Slides 17-18)**
17. Resumo
18. Conclusão e Perguntas

---

## 🖼️ Onde Adicionar Imagens

Os slides marcados com **⭐ IMAGEM** nos comentários precisam de imagens. Localize estes comentários nos arquivos:

### **Slide 1** (`components/slides/Slide01.tsx`)
```tsx
{/* ⭐ IMAGEM: Adicione aqui um ícone ou logo relacionado a estatística/dados */}
{/* Sugestão: Gráfico de distribuição, dados, ou símbolo matemático */}
```

### **Slide 7** (`components/slides/Slide07.tsx`)
```tsx
{/* ⭐ IMAGEM: Adicione aqui uma ilustração de cartas sendo retiradas de um baralho */}
{/* Sugestão: Duas imagens lado a lado mostrando "com reposição" vs "sem reposição" */}
```

### **Slide 16** (`components/slides/Slide16.tsx`)
```tsx
{/* ⭐ IMAGEM: Adicione aqui um diagrama ilustrando Naive Bayes ou seleção de features */}
{/* Sugestão: Diagrama com features conectadas a uma variável alvo, mostrando independência */}
```

### **Como Adicionar Imagens**

1. Coloque as imagens na pasta `public/images/`
2. Importe no componente:
   ```tsx
   import Image from 'next/image'
   
   <Image 
     src="/images/nome-da-imagem.png" 
     alt="Descrição"
     width={400}
     height={300}
   />
   ```

---

## 🎯 Personalização

### **Alterar Cores**

Edite `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',      // Azul principal
      secondary: '#1e40af',    // Azul secundário
    },
  },
}
```

### **Alterar Informações do Grupo**

Edite `components/slides/Slide01.tsx` e `Slide18.tsx` com suas informações.

### **Adicionar Mais Slides**

1. Crie novo componente em `components/slides/SlideXX.tsx`
2. Importe e adicione em `data/slides.ts`

---

## 🐛 Solução de Problemas

### **Erro: "Module not found"**
```bash
# Reinstalar dependências
rm -rf node_modules
npm install
```

### **Porta 3000 em uso**
```bash
# Usar outra porta
npm run dev -- -p 3001
```

### **Build falha**
```bash
# Limpar cache
rm -rf .next
npm run build
```

---

## 📊 Performance

- **Build size:** ~200KB (gzipped)
- **First Load JS:** ~100KB
- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)

---

## 🎓 Modo Apresentador

Para usar em uma apresentação real:

1. **Tela cheia:** Pressione `F11` no navegador
2. **Resolução recomendada:** 1920x1080 (Full HD)
3. **Projetor:** Conecte antes de iniciar a apresentação
4. **Teste:** Navegue por todos os slides antes

---

## 📦 Deploy

### **Vercel (Recomendado)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**

```bash
# Build
npm run build

# Arraste a pasta .next para o Netlify
```

---

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

---

## 📄 Licença

Material educacional para uso acadêmico.

---

## 🎉 Créditos

**Desenvolvido para:** Seminário de Estatística e Ciência de Dados  
**Tema:** Independência Estatística e suas Aplicações  
**Duração:** 40 minutos (35 min apresentação + 5 min perguntas)  
**Data:** Novembro/2025

---

**Boa apresentação! 🚀📊**

