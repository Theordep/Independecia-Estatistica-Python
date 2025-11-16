# 🖼️ Guia de Imagens
## Onde e Como Adicionar Imagens na Apresentação

Este documento lista **todos os locais** onde você deve adicionar imagens para completar a apresentação.

---

## 📋 Lista de Imagens Necessárias

### **1️⃣ Slide 1 - Título**

**Arquivo:** `components/slides/Slide01.tsx`  
**Linha aproximada:** 8

**Descrição da imagem necessária:**
- **Tipo:** Ícone ou logo relacionado a estatística/dados
- **Sugestões:**
  - Gráfico de distribuição normal (curva de sino)
  - Ícones de dados/estatística
  - Símbolo matemático (∑, π, σ)
  - Gráfico de barras/pizza estilizado
- **Tamanho recomendado:** 200x200px a 400x400px
- **Formato:** PNG (com fundo transparente) ou SVG

**Localização no código:**
```tsx
{/* ⭐ IMAGEM: Adicione aqui um ícone ou logo relacionado a estatística/dados */}
{/* Sugestão: Gráfico de distribuição, dados, ou símbolo matemático */}
<div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
  <span className="text-6xl">📊</span>  {/* Substituir por imagem */}
</div>
```

**Como adicionar:**
```tsx
import Image from 'next/image'

<div className="w-32 h-32 rounded-full overflow-hidden">
  <Image 
    src="/images/estatistica-icon.png" 
    alt="Ícone de Estatística"
    width={128}
    height={128}
    className="object-cover"
  />
</div>
```

---

### **2️⃣ Slide 7 - Independência vs. Dependência**

**Arquivo:** `components/slides/Slide07.tsx`  
**Linha aproximada:** 68

**Descrição da imagem necessária:**
- **Tipo:** Ilustração de cartas sendo retiradas de um baralho
- **Sugestões:**
  - **Imagem 1 (lado esquerdo):** Baralho + carta sendo retirada + seta indicando "volta para o baralho" (com reposição)
  - **Imagem 2 (lado direito):** Baralho + carta sendo retirada + carta fora do baralho (sem reposição)
  - Diagrama lado a lado mostrando os dois cenários
- **Tamanho recomendado:** 600x400px (total) ou 300x400px cada
- **Formato:** PNG ou SVG

**Localização no código:**
```tsx
{/* ⭐ IMAGEM: Adicione aqui uma ilustração de cartas sendo retiradas de um baralho */}
{/* Sugestão: Duas imagens lado a lado mostrando "com reposição" vs "sem reposição" */}
```

**Como adicionar:**
```tsx
<div className="mt-8 grid md:grid-cols-2 gap-6">
  <div className="text-center">
    <Image 
      src="/images/cartas-com-reposicao.png" 
      alt="Cartas com reposição"
      width={300}
      height={200}
      className="rounded-lg shadow-lg mx-auto"
    />
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Com reposição</p>
  </div>
  <div className="text-center">
    <Image 
      src="/images/cartas-sem-reposicao.png" 
      alt="Cartas sem reposição"
      width={300}
      height={200}
      className="rounded-lg shadow-lg mx-auto"
    />
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sem reposição</p>
  </div>
</div>
```

---

### **3️⃣ Slide 16 - Aplicações em Machine Learning**

**Arquivo:** `components/slides/Slide16.tsx`  
**Linha aproximada:** 51

**Descrição da imagem necessária:**
- **Tipo:** Diagrama ilustrando Naive Bayes ou seleção de features
- **Sugestões:**
  - **Opção 1:** Diagrama de Naive Bayes mostrando features independentes apontando para uma classe
  - **Opção 2:** Diagrama de seleção de features mostrando features conectadas (ou não) a uma variável alvo
  - **Opção 3:** Fluxograma de um classificador de spam (features: "viagra", "dinheiro", etc. → Spam/Ham)
- **Tamanho recomendado:** 800x500px
- **Formato:** PNG ou SVG
- **Elementos importantes:**
  - Nós representando features (círculos)
  - Setas/conexões
  - Variável alvo (retângulo)
  - Indicação de independência (setas não conectadas entre features)

**Localização no código:**
```tsx
{/* ⭐ IMAGEM: Adicione aqui um diagrama ilustrando Naive Bayes ou seleção de features */}
{/* Sugestão: Diagrama com features conectadas a uma variável alvo, mostrando independência */}
```

**Como adicionar:**
```tsx
<div className="mt-8 flex justify-center">
  <Image 
    src="/images/naive-bayes-diagram.png" 
    alt="Diagrama do Naive Bayes"
    width={800}
    height={500}
    className="rounded-lg shadow-xl"
  />
</div>

{/* Ou, se preferir uma explicação em texto */}
<div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
    💡 Dica: Adicione aqui um diagrama mostrando como o Naive Bayes trata features como independentes
  </p>
</div>
```

---

## 📁 Onde Salvar as Imagens

1. **Crie a pasta** (se não existir):
   ```
   trabalho-estatistica/
   └── public/
       └── images/
   ```

2. **Salve suas imagens com nomes descritivos:**
   ```
   public/images/
   ├── estatistica-icon.png
   ├── cartas-com-reposicao.png
   ├── cartas-sem-reposicao.png
   └── naive-bayes-diagram.png
   ```

3. **Referencie no código:**
   ```tsx
   <Image src="/images/nome-da-imagem.png" ... />
   ```
   ⚠️ **Importante:** O caminho começa com `/images/` (sem `public/`)

---

## 🎨 Fontes de Imagens Sugeridas

### **1. Bancos de Imagens Gratuitos**

- **Unsplash:** https://unsplash.com (fotos de alta qualidade)
- **Pexels:** https://pexels.com (fotos gratuitas)
- **Pixabay:** https://pixabay.com (imagens e vetores)

### **2. Ícones e Vetores**

- **Flaticon:** https://flaticon.com (ícones gratuitos)
- **Noun Project:** https://thenounproject.com (ícones simples)
- **Icons8:** https://icons8.com (ícones e ilustrações)

### **3. Criar Você Mesmo**

- **Canva:** https://canva.com (design gráfico fácil)
- **Figma:** https://figma.com (design profissional)
- **Excalidraw:** https://excalidraw.com (diagramas rápidos)

### **4. Buscar por Termos Específicos**

Para **Slide 1:**
- Buscar: "statistics icon", "data analysis icon", "chart icon"

Para **Slide 7:**
- Buscar: "playing cards illustration", "deck of cards", "card shuffle"

Para **Slide 16:**
- Buscar: "naive bayes diagram", "machine learning flowchart", "feature selection diagram"

---

## 🔧 Ferramentas Úteis

### **Redimensionar Imagens**

- **Online:** https://squoosh.app (otimizar e redimensionar)
- **Online:** https://tinypng.com (comprimir PNG)

### **Remover Fundo**

- **Remove.bg:** https://remove.bg (remover fundo automaticamente)

### **Converter Formatos**

- **CloudConvert:** https://cloudconvert.com (converter qualquer formato)

---

## ✅ Checklist de Imagens

Use este checklist para verificar se todas as imagens foram adicionadas:

- [ ] **Slide 1:** Ícone/logo de estatística (`estatistica-icon.png`)
- [ ] **Slide 7:** Ilustração de cartas com reposição (`cartas-com-reposicao.png`)
- [ ] **Slide 7:** Ilustração de cartas sem reposição (`cartas-sem-reposicao.png`)
- [ ] **Slide 16:** Diagrama de Naive Bayes ou seleção de features (`naive-bayes-diagram.png`)

---

## 💡 Dicas Importantes

### **1. Otimização**

- Imagens para web devem ser **otimizadas** (< 200KB cada)
- Use formatos modernos: WebP ou PNG otimizado
- Next.js otimiza automaticamente, mas comece com imagens leves

### **2. Acessibilidade**

- Sempre adicione `alt` text descritivo
- Exemplo: `alt="Diagrama ilustrando o Naive Bayes com features independentes"`

### **3. Consistência Visual**

- Use um estilo visual consistente (todas ilustrações ou todas fotos)
- Mantenha paleta de cores similar (azul/roxo conforme o tema)

### **4. Backup**

- Se não encontrar imagens adequadas, os slides funcionam sem elas
- Os emojis atuais são placeholders funcionais

---

## 🆘 Precisa de Ajuda?

Se não conseguir encontrar ou criar as imagens:

1. **Opção 1:** Use os emojis/placeholders atuais (já está funcional)
2. **Opção 2:** Adicione apenas texto descritivo no lugar
3. **Opção 3:** Crie diagramas simples no PowerPoint e exporte como PNG

---

## 📊 Exemplo Completo

### **Antes (sem imagem):**

```tsx
<div className="text-6xl">📊</div>
```

### **Depois (com imagem):**

```tsx
import Image from 'next/image'

<Image 
  src="/images/estatistica-icon.png"
  alt="Ícone representando estatística e análise de dados"
  width={128}
  height={128}
  className="rounded-full shadow-lg"
/>
```

---

**Boa sorte com as imagens! 🎨📸**

