import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { queries } from '../content'

const KEYWORDS = /\b(SELECT|FROM|WHERE|AND|ORDER BY|DESC|ASC)\b/g

function highlight(line: string) {
  const parts: ReactNode[] = []
  let last = 0
  for (const m of line.matchAll(KEYWORDS)) {
    if (m.index! > last) parts.push(line.slice(last, m.index))
    parts.push(
      <span className="kw" key={m.index}>
        {m[0]}
      </span>,
    )
    last = m.index! + m[0].length
  }
  parts.push(line.slice(last))
  return parts
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function QueryDemo() {
  const [active, setActive] = useState(0)
  const [typed, setTyped] = useState(0)
  const [lines, setLines] = useState(0)
  const [rows, setRows] = useState(0)

  const q = queries[active]
  const sqlLines = useMemo(() => q.sql.split('\n'), [q])

  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(q.question.length)
      setLines(sqlLines.length)
      setRows(q.rows.length)
      return
    }
    setTyped(0)
    setLines(0)
    setRows(0)
    const timers: number[] = []
    let t = 300
    for (let i = 1; i <= q.question.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), t))
      t += 28
    }
    t += 350
    for (let i = 1; i <= sqlLines.length; i++) {
      timers.push(window.setTimeout(() => setLines(i), t))
      t += 160
    }
    t += 300
    for (let i = 1; i <= q.rows.length; i++) {
      timers.push(window.setTimeout(() => setRows(i), t))
      t += 120
    }
    return () => timers.forEach(clearTimeout)
  }, [q, sqlLines])

  const typing = typed < q.question.length

  return (
    <figure className="demo" aria-label="Text-to-SQL demo">
      <div className="demo-picks" role="group" aria-label="Pick a question">
        {queries.map((item, i) => (
          <button
            key={item.label}
            type="button"
            className="pick"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="demo-question">
        <span className="sr-only">{q.question}</span>
        <span aria-hidden="true">
          {q.question.slice(0, typed)}
          <span className={typing ? 'caret' : 'caret caret-idle'} />
        </span>
      </p>

      <pre className="demo-sql" aria-label="Generated SQL">
        <code>
          {sqlLines.map((line, i) => (
            <span key={i} className="sql-line" data-shown={i < lines}>
              {highlight(line)}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>

      <div className="demo-result">
        <table>
          <thead>
            <tr>
              {q.columns.map((c) => (
                <th key={c} scope="col">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {q.rows.map((r, i) => (
              <tr key={r.join()} data-shown={i < rows}>
                {r.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="demo-count" data-shown={rows === q.rows.length}>
          {q.rows.length} rows
        </p>
      </div>

      <figcaption>
        A scripted replay of the text-to-SQL agents I build, with this site as the database.
      </figcaption>
    </figure>
  )
}
