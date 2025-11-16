'use client'

interface MathFormulaProps {
  children: React.ReactNode
  block?: boolean
  explanation?: string // Nova prop para explicação
}

export default function MathFormula({ children, block = false, explanation }: MathFormulaProps) {
  if (block) {
    return (
      <div className="my-8">
        <div className="math-display">
          {children}
        </div>
        {explanation && (
          <div className="formula-explanation">
            💡 <strong>Como ler:</strong> {explanation}
          </div>
        )}
      </div>
    )
  }

  return (
    <span className="math-inline">
      {children}
    </span>
  )
}

